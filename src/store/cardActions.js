import { addCardsAction } from '../store/cardReducer';

export const fetchCards = () => {
  return (dispatch) => {
    fetch('http://localhost:9999/products')
      .then((response) => response.json())
      .then((json) => dispatch(addCardsAction(json)));
  };
};
