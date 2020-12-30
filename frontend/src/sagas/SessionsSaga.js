import {call,put,takeEvery} from 'redux-saga/effects';
import {getSessionsApi} from './apiCalls';

function* fetchSessions(action){
    
    try{
        const sessions=yield call(getSessionsApi,action.payload);
        yield put({type: 'FETCH_SESSIONS_SUCCESS',sessions:sessions});

    }catch(e){
        yield put({type: 'FETCH_SESSIONS_FAILED',message:e.message });
    }
}

function* SessionsSaga(){
    yield takeEvery('FETCH_SESSIONS_REQUESTED', fetchSessions);
}

export default SessionsSaga;