import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import rootReducer from './reducers/index';

const sagaMiddleware=createSagaMiddleware();

var middleware =applyMiddleware(sagaMiddleware);

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore( rootReducer, {}, composeEnhancers(
    middleware
));


sagaMiddleware.run(rootSaga);