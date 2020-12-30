import {call,put,takeEvery} from 'redux-saga/effects';
import {getUsersApi,getUserByEmailApi} from './apiCalls';

function* fetchUsers(action){
    
    try{
        let users;
        if(action.payload===""){
            users = yield call(getUsersApi);
        }else{
            users = yield call(getUserByEmailApi,action.payload);
        }
        yield put({type: 'FETCH_USERS_SUCCESS',users:users});
        
    }catch(e){
        yield put({type: 'FETCH_USERS_FAILED',message:e.message });
    }
}

function* UsersSaga(){
    yield takeEvery('FETCH_USERS_REQUESTED', fetchUsers);
}

export default UsersSaga;