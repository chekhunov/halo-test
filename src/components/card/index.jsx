import React from 'react';
import classNames from 'classnames';
import BuyButton from '../buyButton';
import style from './Card.module.scss';

function Card({ index, name, category, price, poppupActive, setPoppupActive }) {
  return (
    <div className={classNames(style.card, 'card')}>
      <div className={classNames(style.headline, 'uppercase')}>{category}</div>
      <div className={style.title}>{name}</div>

      <div className={style.priceBox}>
        <div className={style.price}>
          <span className={style.units}>$</span>
          <span>{price}</span>
        </div>
        <div>
          <BuyButton index={index} poppupActive={poppupActive} setPoppupActive={setPoppupActive} />
        </div>
      </div>
    </div>
  );
}

export default Card;
