const FETCH_CARDS = 'FETCH_CARDS';
const FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS';
const FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR';

const defaultState = {
  cards: [],
  isLoading: false,
  error: null,
};

export const cardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CARDS:
      return { ...state, isLoading: true };

    case FETCH_CARDS_SUCCESS:
      return { ...state, isLoading: false, cards: action.payload };

    case FETCH_CARDS_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export const fetchCardsAction = (payload) => ({ type: FETCH_CARDS, payload });
export const fetchCardsSuccessAction = (payload) => ({ type: FETCH_CARDS_SUCCESS, payload });
export const fetchCardsErrorAction = (payload) => ({ type: FETCH_CARDS_ERROR, payload });
