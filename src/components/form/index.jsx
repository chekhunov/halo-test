import React, { useState, useEffect } from 'react';
import useForm from '../../hooks/useForm';
import Button from '../button';
import classNames from 'classnames';
import style from './Form.module.scss';

const Form = ({ name, category, price, poppupActive, setPoppupActive }) => {
  const { values, handleChange, handleSubmit } = useForm(order);
  const [nameInput, setNameInput] = useState(values.name);
  const [phoneInput, setPhoneInput] = useState(values.phone);

  function order() {
    console.log(values);
  }

  // const isButtonActive = () => {
  //   if (nameInput.length !== 0 && phoneInput.length !== 0) return true;
  // };

  // const isFirstName = () => {
  //   if (firstName === '' || firstName.length < 3) return false;
  // };
  return (
    <div className="section is-fullheight">
      <div className="container">
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

              <label htmlFor="name">
                <input
                  id="name"
                  className={style.input}
                  type="name"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={nameInput}
                />
              </label>

              <input
                className={classNames(style.input, style.lastInput)}
                type="tel"
                name="phone"
                placeholder="Number"
                onChange={handleChange}
                value={phoneInput}
              />

              <Button
                type="submit"
                width={288}
                name={'Order'}
                poppupActive={poppupActive}
                setPoppupActive={() => setPoppupActive}
                values={values}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
