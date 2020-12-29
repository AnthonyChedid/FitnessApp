import {all} from 'redux-saga/effects';
import TrainersSaga from './TrainersSaga';
import CategoriesSaga from './CategoriesSaga';
import newTrainerSaga from './NewTrainerSaga';



export default function* rootSaga(){
    yield all([
        TrainersSaga(),
        CategoriesSaga(),
        newTrainerSaga(),
    ])
}