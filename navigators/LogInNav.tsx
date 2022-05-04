import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogInNavParamList } from '../navTypes';
import CreateAccount from '../screens/CreateAccount';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator<LogInNavParamList>();

const LogInNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
};

export default LogInNav;
