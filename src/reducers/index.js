import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  //add a key to global application state and returns value
  books: BooksReducer
});

export default rootReducer;
