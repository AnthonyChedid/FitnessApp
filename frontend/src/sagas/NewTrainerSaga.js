import {call,put, takeLatest} from 'redux-saga/effects';
import {postTrainer} from './apiCalls';

  function* addTrainer(action) {
    try {
    
      const result = yield call(postTrainer,action.trainer);
      
      yield put({ type: 'NEW_TRAINER_SUCCESS'});

    } 
    catch(e) {
        yield put({ type: 'NEW_TRAINER_FAILED'});
    }
  }


  function* newTrainerSaga(){
  
    yield takeLatest('NEW_TRAINER_REQUESTED', addTrainer );
}

export default newTrainerSaga;