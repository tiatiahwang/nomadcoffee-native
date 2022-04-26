import styled from 'styled-components/native';

const ErrorMessage = styled.Text`
  color: black;
  font-weight: 600;
  text-align: center;
  font-size: 14px;
  margin: 8px 0;
`;

interface Props {
  error?: string;
}

const FormError = ({ error }: Props) => {
  return <ErrorMessage>{error}</ErrorMessage>;
};

export default FormError;
