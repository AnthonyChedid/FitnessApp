import {call,put, takeLatest} from 'redux-saga/effects';
import {postUser} from './apiCalls';

  function* addUser(action) {
    try {
    
      const result = yield call(postUser,action.user);
      
      yield put({ type: 'NEW_USER_SUCCESS'});

    } 
    catch(e) {
        yield put({ type: 'NEW_USER_FAILED'});
    }
  }


  function* newUserSaga(){
  
    yield takeLatest('NEW_USER_REQUESTED', addUser );
}

export default newUserSaga;