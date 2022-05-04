import { useReactiveVar } from '@apollo/client';
import { Text, TouchableOpacity, View } from 'react-native';
import { isLoggedInVar, logUserOut } from '../apollo/vars';

const Me = () => {
  return (
    <TouchableOpacity onPress={logUserOut}>
      <Text style={{ marginTop: 50 }}>LOGOUT</Text>
    </TouchableOpacity>
  );
};

export default Me;
