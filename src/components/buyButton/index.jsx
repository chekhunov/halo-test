import React from 'react';
import classNames from 'classnames';
import style from './BuyButton.module.scss';

function BuyButton({ index, poppupActive, setPoppupActive }) {
  const clickBtn = () => {
    setPoppupActive({ active: true, title: 'Buy', id: index });
  };
  return (
    <div
      className={classNames(style.btn, 'uppercase', 'buy-btn', {
        active: poppupActive.active && poppupActive.id === index,
      })}
      onClick={() => {
        clickBtn();
      }}>
      <span>Buy</span>
    </div>
  );
}

export default BuyButton;
