import { combineReducers } from 'redux';
import trainers from './TrainersReducer';
import categories from './CategoriesReducer';
import newTrainer from './NewTrainerReducer';
import newUser from './newUserReducer';
const rootReducer =combineReducers({
  trainers,
  categories,
  newTrainer,
  newUser,
});

export default rootReducer;