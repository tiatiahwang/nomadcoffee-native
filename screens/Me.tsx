import { useReactiveVar } from '@apollo/client';
import { Text, TouchableOpacity, View } from 'react-native';
import { isLoggedInVar, logUserOut } from '../apollo/vars';
import Login from './Login';

const Me = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return isLoggedIn ? (
    <TouchableOpacity onPress={logUserOut}>
      <Text>LOGOUT</Text>
    </TouchableOpacity>
  ) : (
    <Login />
  );
};

export default Me;
