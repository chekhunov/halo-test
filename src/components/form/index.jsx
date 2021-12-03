import React, { useState } from 'react';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import Button from '../button';
import classNames from 'classnames';
import style from './Form.module.scss';
import ClearInput from '../clearInput';

const Form = ({ name, category, price, poppupActive, setPoppupActive }) => {
  const { values, setValues, handleChange, handleSubmit } = useForm(order);

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const errorText = {
    position: 'absolute',
    bottom: '-16px',
    fontSize: '12px',
    color: '#E43F3F',
  };

  const error = {
    position: 'absolute',
    top: '-26px',
    fontSize: '24px',
    color: '#000000',
  };

  async function order() {
    if (nameError === '' && phoneError === '') {
      try {
        const response = await axios.post('http://localhost:9999/form', values);
        setValues({ name: '' });
        setValues({ phone: '' });
        console.log(response.config.data);
        alert('These forms have been sent successfully!');
      } catch (error) {
        alert('Error sending a form');
      }
    }
  }

  //Check on emptiness
  function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

  // Cleaning form
  const toClear = (value, event) => {
    if (value === 'name') {
      event.preventDefault();
      return setValues({ name: '' });
    }
    if (value === 'phone') {
      event.preventDefault();
      return setValues({ phone: '' });
    }
  };

  // Validation forms only letters
  const onlyLetters = (str) => {
    return /^[a-zA-Z\u00C0-\u00ff]+$/.test(str);
  };

  // Validation forms only numbers
  const onlyNumbers = (str) => {
    return !/\D/.test(str);
  };

  //phone number length
  const lengthNumbers = (str) => {
    return str.length !== 12;
  };

  const toValidForm = () => {
    if (isEmpty(values.name)) {
      setNameError('This field in required');
    } else if (!onlyLetters(String(values.name))) {
      setNameError('Only letters allowed');
    } else {
      setNameError('');
    }

    if (isEmpty(values.phone)) {
      setPhoneError('This field in required');
    } else if (!onlyNumbers(String(values.phone))) {
      setPhoneError('Only numbers allowed');
    } else if (lengthNumbers(String(values.phone))) {
      setPhoneError('Should contain 12 characters');
    } else {
      setPhoneError('');
    }
  };

  return (
    <div className={style.section}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={classNames(style.headline, 'uppercase')}>{category}</div>
        <div className={style.title}>{name}</div>

        <div className={style.priceBox}>
          <div className={style.price}>
            <span className={style.units}>$</span>
            <span>{price}</span>
          </div>
        </div>

        <label className={style.label}>
          <span style={error}>{nameError && 'Error'}</span>
          <span className={style.input}>
            <input
              type="name"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={values.name}
            />

            {!isEmpty(values.name) && <ClearInput toClear={toClear} type={'name'} />}
          </span>
          <span style={errorText}>{nameError}</span>
        </label>

        <label className={classNames(style.label, style.last)}>
          <span style={error}>{phoneError && 'Error'}</span>
          <span className={style.input}>
            <input
              type="tel"
              name="phone"
              placeholder="Number"
              onChange={handleChange}
              value={values.phone}
            />

            {!isEmpty(values.phone) && <ClearInput toClear={toClear} type={'phone'} />}
          </span>

          <span style={errorText}>{phoneError}</span>
        </label>

        <Button
          type="submit"
          width={288}
          name={'Order'}
          poppupActive={poppupActive}
          setPoppupActive={() => setPoppupActive}
          values={values}
          toValidForm={toValidForm}
        />
      </form>
    </div>
  );
};

export default Form;
