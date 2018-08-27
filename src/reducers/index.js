import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  //map reducers
  books: BooksReducer
});

export default rootReducer;
