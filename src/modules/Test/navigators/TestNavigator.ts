import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import TestScreen from '@/Test/screens/TestScreen';
import {TEST_SCREEN} from '@/Test/constants/testRoutes';

const TestNavigator = createStackNavigator(
  {
    [TEST_SCREEN]: {screen: TestScreen},
  },
  {
    initialRouteName: TEST_SCREEN,
  },
);

const TestNavigatorContainer = createAppContainer(TestNavigator);

export const TEST_ROUTE = 'TEST_ROUTE';
export default TestNavigatorContainer;
