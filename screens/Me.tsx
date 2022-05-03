import { useReactiveVar } from '@apollo/client';
import { Text, TouchableOpacity, View } from 'react-native';
import { isLoggedInVar, logUserOut } from '../apollo/vars';
import Login from './Login';

const Me = () => {
  return (
    <TouchableOpacity onPress={logUserOut}>
      <Text>LOGOUT</Text>
    </TouchableOpacity>
  );
};

export default Me;
