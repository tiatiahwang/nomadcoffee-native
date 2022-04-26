import styled from 'styled-components/native';
import { colors } from '../../colors';

export const Input = styled.TextInput<{ last?: boolean; hasError?: boolean }>`
  width: 100%;
  border: 1px solid ${({ hasError }) => (hasError ? 'black' : '#e5e5e5')};
  padding: 15px 7px;
  border-radius: 4px;
  color: ${colors.ivory};
  margin-bottom: ${({ last }) => (last ? 0 : 10)}px;
`;
