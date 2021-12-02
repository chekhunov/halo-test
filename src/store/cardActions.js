import {
  fetchCardsAction,
  fetchCardsSuccessAction,
  fetchCardsErrorAction,
} from '../store/cardReducer';
import axios from 'axios';

export const fetchCards = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchCardsAction());
      const response = await axios.get('http://localhost:9999/products');
      setTimeout(() => {
        dispatch(fetchCardsSuccessAction(response.data));
      }, 500);
    } catch (error) {
      dispatch(fetchCardsErrorAction({ payload: 'Error occurred when loading' }));
    }
  };
};
