import { ReactNode } from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';

interface Props {
  children: ReactNode;
}

const DismissKeyboard = ({ children }: Props) => {
  const dismissKeyboard = () => Keyboard.dismiss();
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={dismissKeyboard}
      disabled={Platform.OS === 'web'}
    >
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
