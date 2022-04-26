import styled from 'styled-components/native';

const ErrorMessage = styled.Text<{ noSpace?: boolean }>`
  color: black;
  font-weight: 600;
  text-align: center;
  font-size: ${({ noSpace }) => (noSpace ? '12px' : '14px')};
  margin-top: ${({ noSpace }) => (noSpace ? '0px' : '8px')};
  margin-bottom: ${({ noSpace }) => (noSpace ? '10px' : '8px')};
`;

interface Props {
  error?: string;
  noSpace?: boolean;
}

const FormError = ({ error, noSpace }: Props) => {
  return <ErrorMessage noSpace={noSpace}>{error}</ErrorMessage>;
};

export default FormError;
