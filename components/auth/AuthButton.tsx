import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../colors';

const Button = styled.View<{ disabled?: boolean }>`
  background-color: ${colors.ivory};
  padding: 13px 10px;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 5px;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
  font-size: 16px;
`;

interface Props {
  text: string;
  isLoading?: boolean;
}

const AuthButton = ({ text, isLoading }: Props) => {
  return (
    <Button>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <ButtonText>{text}</ButtonText>
      )}
    </Button>
  );
};

export default AuthButton;
