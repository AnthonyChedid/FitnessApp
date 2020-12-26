import {all} from 'redux-saga/effects';
import TrainersSaga from './TrainersSaga';



export default function* rootSaga(){
    yield all([
        TrainersSaga(),
    ])
}