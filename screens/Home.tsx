import { Text } from 'react-native';
import styled from 'styled-components/native';
import { useSeeCoffeeShopsQuery } from '../src/graphql/generated';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text``;

const Home = () => {
  // const [seeCoffeeShops, { loading }] = useSeeCoffeeShopsQuery();
  return (
    <Container>
      <Title>Home</Title>
    </Container>
  );
};

export default Home;
