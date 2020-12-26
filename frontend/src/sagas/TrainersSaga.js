import {call,put,takeEvery} from 'redux-saga/effects';
import {getTrainersApi} from './apiCalls';

function* fetchTrainers(action){
    
    try{
        const trainers=yield call(getTrainersApi);
        yield put({type: 'FETCH_TRAINERS_SUCCESS',trainers:trainers});

    }catch(e){
        yield put({type: 'FETCH_TRAINERS_FAILED',message:e.message });
    }
}

function* TrainersSaga(){
    yield takeEvery('FETCH_TRAINERS_REQUESTED', fetchTrainers);
}

export default TrainersSaga;