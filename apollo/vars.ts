import { makeVar } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TOKEN = 'token';

export const isLoggedInVar = makeVar(false);
export const tokenVar = makeVar('');

export const logUserIn = async (token: string) => {
  await AsyncStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
  tokenVar(token);
};

export const logUserOut = async () => {
  await AsyncStorage.removeItem(TOKEN);
  isLoggedInVar(false);
  tokenVar('');
};
