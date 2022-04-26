import { useReactiveVar } from '@apollo/client';
import { Text, View } from 'react-native';
import { isLoggedInVar } from '../apollo/vars';
import Login from './Login';

const Me = () => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return isLoggedIn ? <Text>내정보</Text> : <Login />;
};

export default Me;
