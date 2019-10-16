import {combineReducers} from 'redux';
import testReducer from '@/Test/testReducer';

import {State as TestState} from '@/Test/testReducer';

export type State = {
  testState: TestState;
};

const state = combineReducers({
  testState: testReducer,
});

export default state;
