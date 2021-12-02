import React from 'react';

import style from './ClearInput.module.scss';

function ClearInput({ toClear, type }) {
  return (
    <svg
      className={style.clearInput}
      onClick={toClear(type)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#E43F3F" />
      <path
        d="M17 7L7 17"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7L17 17"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ClearInput;
