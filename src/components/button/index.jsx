import React from 'react';
import classNames from 'classnames';
import style from './Button.module.scss';

function Button({ width, name, poppupActive, setPoppupActive, values, toValidForm }) {
  const styleBtn = {
    maxWidth: `${width}px`,
  };

  const styleTextBtn = {
    marginRight: name === 'Order' && `28px`,
  };

  const setDataPoppup = () => {
    toValidForm();
    setPoppupActive({ active: true, title: name });
  };

  function isEmpty(obj) {
    for (let key in obj) {
      console.log(key);
      return false;
    }
    return true;
  }

  console.log(values);
  return (
    <button
      style={styleBtn}
      className={classNames(
        style.btn,
        { uppercase: name === 'Order' },
        { disable: name === 'Order' && isEmpty(values.name) && isEmpty(values.phone) },
      )}
      onClick={setDataPoppup}>
      <span style={styleTextBtn}>
        {name}
        {name === 'Order' && (
          <svg
            className="icon-arrow-left"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.16663 10H15.8333"
              stroke="#4bcfa0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 4.16666L15.8333 9.99999L10 15.8333"
              stroke="#4bcfa0"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </button>
  );
}

export default Button;
