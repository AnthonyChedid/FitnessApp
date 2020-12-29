import { combineReducers } from 'redux';
import trainers from './TrainersReducer';
import categories from './CategoriesReducer';
import newTrainer from './NewTrainerReducer';
const rootReducer =combineReducers({
  trainers,
  categories,
  newTrainer,
});

export default rootReducer;