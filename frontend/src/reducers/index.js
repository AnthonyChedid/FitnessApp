import { combineReducers } from 'redux';
import trainers from './TrainersReducer';
import categories from './CategoriesReducer';
import newTrainer from './NewTrainerReducer';
import newUser from './newUserReducer';
import users from './UsersReducer'
import currentUser from './CurrentUserReducer';
import sessions from './SessionsReducer';
import newSession from './PostSessionReducer';

const rootReducer =combineReducers({
  trainers,
  categories,
  newTrainer,
  newUser,
  users,
  currentUser,
  sessions,
  newSession,
});

export default rootReducer;