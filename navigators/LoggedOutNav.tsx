import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoggedOutNavParamList } from '../navTypes';
import LogInNav from './LogInNav';
import TabsNav from './TabsNav';

const Stack = createNativeStackNavigator<LoggedOutNavParamList>();

const LoggedOutNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitle: () => false,
        headerTransparent: true,
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="TabsNav"
        component={TabsNav}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="LogInNav" component={LogInNav} />
    </Stack.Navigator>
  );
};

export default LoggedOutNav;
