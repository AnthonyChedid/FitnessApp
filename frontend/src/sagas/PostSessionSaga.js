import {call,put, takeLatest} from 'redux-saga/effects';
import {postSession} from './apiCalls';

  function* addSession(action) {
    try {
    
      const result = yield call(postSession, action.session);
      yield put({ type: 'NEW_SESSION_SUCCESS'});

    } 
    catch(e) {
        yield put({ type: 'NEW_SESSION_FAILED'});
    }
  }

  function* newSessionSaga(){
  
    yield takeLatest('NEW_SESSION_REQUESTED', addSession );
}

export default newSessionSaga;