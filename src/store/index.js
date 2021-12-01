import { createStore, combineReducers, applyMiddleware } from 'redux'
import { cardReducer } from './cardReducer'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers ({
    cards: cardReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))