import {call,put,takeEvery} from 'redux-saga/effects';
import {getUsersApi} from './apiCalls';

function* fetchUsers(action){
    
    try{
        const users=yield call(getUsersApi);
        yield put({type: 'FETCH_USERS_SUCCESS',users:users});

    }catch(e){
        yield put({type: 'FETCH_USERS_FAILED',message:e.message });
    }
}

function* UsersSaga(){
    yield takeEvery('FETCH_USERS_REQUESTED', fetchUsers);
}

export default UsersSaga;