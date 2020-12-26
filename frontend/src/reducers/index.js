import { combineReducers } from 'redux';
import trainers from './TrainersReducer';

const rootReducer =combineReducers({
  trainers,
});

export default rootReducer;