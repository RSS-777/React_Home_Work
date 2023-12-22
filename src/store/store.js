import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { learnedReducer, wordsReducer } from "./words/reducer";
import { productsReducer } from "./products/reducer";

const rootReducer = combineReducers({
   words: wordsReducer,
   learnedWords: learnedReducer,
   products: productsReducer
})

const composeEnhabcer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore (
    rootReducer,
    {},
    composeEnhabcer(applyMiddleware(thunk))
)