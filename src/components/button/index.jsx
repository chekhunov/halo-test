import React from 'react';
import classNames from 'classnames';
import style from './Button.module.scss';

function Button({ width, name, poppupActive, setPoppupActive }) {
  const styleBtn = {
    maxWidth: `${width}px`,
  };
  return (
    <div
      style={styleBtn}
      className={classNames(style.btn, { uppercase: name === 'Order' })}
      onClick={() => setPoppupActive({ active: true, title: name })}>
      {name}
      {name === 'Order' && <span className="icon-arrow-left"></span>}
    </div>
  );
}

export default Button;
