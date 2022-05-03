import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoggedInNavParamList } from '../navTypes';
import TabsNav from './TabsNav';

const Stack = createNativeStackNavigator<LoggedInNavParamList>();

const LoggedInNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabsNav"
        component={TabsNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default LoggedInNav;
