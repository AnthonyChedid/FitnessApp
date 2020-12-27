import { combineReducers } from 'redux';
import trainers from './TrainersReducer';
import categories from './CategoriesReducer';

const rootReducer =combineReducers({
  trainers,
  categories,
});

export default rootReducer;