import React, { useState, useEffect } from 'react';
import useForm from '../../hooks/useForm';
import Button from '../button';
import classNames from 'classnames';
import style from './Form.module.scss';
import ClearInput from '../clearInput';

const Form = ({ name, category, price, poppupActive, setPoppupActive }) => {
  const { values, handleChange, handleSubmit } = useForm(order);
  const [nameInput, setNameInput] = useState(values.name);
  const [nameError, setNameError] = useState('');
  const [phoneInput, setPhoneInput] = useState(values.phone);
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

  function order() {
    console.log(nameInput, phoneInput);
    console.log(values);
  }

  function isEmpty(obj) {
    for (let key in obj) {
      console.log(key);
      return false;
    }
    return true;
  }

  const toClear = (value) => {
    if (value === 'name') {
    }
    if (value === 'phone') {
    }
  };

  const toValidForm = () => {
    if (isEmpty(values.name)) {
      return setNameError('This field in required');
    }

    if (isEmpty(values.phone)) {
      return setPhoneError('This field in required');
    }
    // if (value === 'phone') {
    // }
  };

  // name
  // This field in required
  // Only letters allowed

  // phone
  // This field in required
  // Only numbers allowed"
  // Should contain 12 characters

  return (
    <div className="section is-fullheight">
      <div className="column is-4 is-offset-4">
        <div className="box">
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={classNames(style.headline, 'uppercase')}>{category}</div>
            <div className={style.title}>{name}</div>
            <div className={style.priceBox}>
              <div className={style.price}>
                <span className={style.units}>$</span>
                <span>{price}</span>
              </div>
            </div>

            <label class={style.label}>
              <span style={error}>{nameError && 'Error'}</span>
              <span className={style.input}>
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={nameInput}
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
                  value={phoneInput}
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
      </div>
    </div>
  );
};

export default Form;
