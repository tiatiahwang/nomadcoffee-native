import { useReactiveVar } from '@apollo/client';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { isLoggedInVar } from '../apollo/vars';
import { LoggedOutNavParamList } from '../navTypes';
import LoggedInNav from './LoggedInNav';
import LoggedOutNav from './LoggedOutNav';
import TabsNav from './TabsNav';

const Stack = createNativeStackNavigator<LoggedOutNavParamList>();

const RootNav = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitle: () => false,
        headerTransparent: true,
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="TabsNav" component={TabsNav} />
    </Stack.Navigator>
  );
};

export default RootNav;
