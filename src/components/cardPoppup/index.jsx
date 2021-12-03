import React from 'react';
import classNames from 'classnames';
import Form from '../form';
import style from './CardPoppup.module.scss';

function CardPoppup({ name, category, price, poppupActive, setPoppupActive, closePoppup }) {
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 15L25 25"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <Form
        name={name}
        category={category}
        price={price}
        poppupActive={poppupActive}
        setPoppupActive={setPoppupActive}
      />
    </div>
  );
}

export default CardPoppup;
