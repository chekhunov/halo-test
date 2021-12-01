const ADD_CARDS = 'ADD_CARDS';

const defaultState = {
  cards: [],
};

export const cardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CARDS:
      return { ...state, cards: [...state.cards, ...action.payload] };

    default:
      return state;
  }
};

export const addCardsAction = (payload) => ({ type: ADD_CARDS, payload });
