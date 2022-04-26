import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import { SharedNavParamList } from '../navTypes';
import useMe from '../hooks/useMe';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Notifications from '../screens/Notifications';
import Me from '../screens/Me';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import { useReactiveVar } from '@apollo/client';
import { isLoggedInVar } from '../apollo/vars';

const Stack = createNativeStackNavigator<SharedNavParamList>();

interface Props {
  screenName: 'Home' | 'Search' | 'Notifications' | 'Me';
}

const SharedStackNav = ({ screenName }: Props) => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: 'white',
      }}
    >
      {screenName === 'Home' && (
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => (
              <Image
                source={require('../assets/logo_letter.png')}
                resizeMode="contain"
                style={{ width: 120, height: 60 }}
              />
            ),
          }}
        />
      )}
      {screenName === 'Search' && (
        <Stack.Screen name="Search" component={Search} />
      )}
      {screenName === 'Notifications' && (
        <Stack.Screen name="Notifications" component={Notifications} />
      )}
      {screenName === 'Me' && <Stack.Screen name="Me" component={Me} />}
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default SharedStackNav;
