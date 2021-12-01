import React from 'react';
import classNames from 'classnames';
import Button from '../button';
import style from './CardPoppup.module.scss';

function CardPoppup({ index, name, category, price, poppupActive, setPoppupActive, closePoppup }) {
  return (
    <div className={classNames(style.card, 'card')}>
      <svg
        className={style.icon}
        onClick={closePoppup}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="#F2F2F2" />
        <path
          d="M25 15L15 25"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15 15L25 25"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <form className={style.form} action="">
        <div className={classNames(style.headline, 'uppercase')}>{category}</div>
        <div className={style.title}>{name}</div>
        <div className={style.priceBox}>
          <div className={style.price}>
            <span className={style.units}>$</span>
            <span>{price}</span>
          </div>
        </div>
        <input className={style.input} type="name" placeholder="Name" />
        <input
          className={classNames(style.input, style.lastInput)}
          type="tel"
          placeholder="Number"
        />
        <Button
          width={288}
          name={'Order'}
          poppupActive={poppupActive}
          setPoppupActive={setPoppupActive}
        />
      </form>
    </div>
  );
}

export default CardPoppup;
