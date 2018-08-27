import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
const rootReducer = combineReducers({
  //state: (state = {}) => state
  //add a key to global application state and returns value
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
