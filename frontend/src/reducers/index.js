import { combineReducers } from 'redux';
import trainers from './TrainersReducer';
import categories from './CategoriesReducer';
import newTrainer from './NewTrainerReducer';
import newUser from './newUserReducer';
import users from './UsersReducer'
const rootReducer =combineReducers({
  trainers,
  categories,
  newTrainer,
  newUser,
  users,
});

export default rootReducer;