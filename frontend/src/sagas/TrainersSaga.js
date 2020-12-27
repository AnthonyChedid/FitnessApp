import {call,put,takeEvery} from 'redux-saga/effects';
import {getTrainersApi,getByNameApi,getByTypeApi,getByNameTypeApi} from './apiCalls';

function* fetchTrainers(action){
    
    try{
        let trainers;
        
        if(action.payload.searchText==="" && action.payload.type===""){
            trainers=yield call(getTrainersApi);
        }
        else if(action.payload.searchText!="" && action.payload.type===""){
            trainers =yield call(getByNameApi,action.payload.searchText);
        }
        else if(action.payload.searchText==="" && action.payload.type!=""){
            trainers =yield call(getByTypeApi,action.payload.type);
        }
        else if(action.payload.searchText!=="" && action.payload.type!==""){
            trainers =yield call(getByNameTypeApi,action.payload.searchText,action.payload.type);
        }

        yield put({type: 'FETCH_TRAINERS_SUCCESS',trainers:trainers});

    }catch(e){
        yield put({type: 'FETCH_TRAINERS_FAILED',message:e.message });
    }
}

function* TrainersSaga(){
    yield takeEvery('FETCH_TRAINERS_REQUESTED', fetchTrainers);
}

export default TrainersSaga;