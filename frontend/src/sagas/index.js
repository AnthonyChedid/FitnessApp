import {all} from 'redux-saga/effects';
import TrainersSaga from './TrainersSaga';
import CategoriesSaga from './CategoriesSaga';



export default function* rootSaga(){
    yield all([
        TrainersSaga(),
        CategoriesSaga(),
    ])
}