import { ReactNode } from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  background-color: white;
`;

const Logo = styled.Image`
  max-width: 50%;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
`;

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback
      style={{ height: '100%' }}
      onPress={dismissKeyboard}
      disabled={Platform.OS === 'web'}
    >
      <Container behavior={Platform.OS == 'android' ? undefined : 'padding'}>
        <Logo resizeMode="contain" source={require('../../assets/logo.png')} />
        {children}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default AuthLayout;
