import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import {createWhitelistFilter} from 'redux-persist-transform-filter';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducer from 'src/reducer';
import saga from 'src/saga';
import AsyncStorage from '@react-native-community/async-storage';

export {State} from 'src/reducer';

const persistingTest = createWhitelistFilter('testState', ['status']);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['testState'],
  transforms: [persistingTest],
  // @xxx autoMergeLevel2 allows to merge each reducer states with persisted fields of each one.
  stateReconciler: autoMergeLevel2,
};

const sagaMiddleware = createSagaMiddleware();

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

export const persistor = persistStore(store);

sagaMiddleware.run(saga);
