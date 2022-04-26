import { FlatList, RefreshControl } from 'react-native';
import Photo from '../components/Photo';
import ScreenLayout from '../components/ScreenLayout';
import { useSeeCoffeeShopsQuery } from '../graphql/generated';

const Home = () => {
  const { data, loading, refetch, fetchMore } = useSeeCoffeeShopsQuery({
    variables: { page: 0 },
  });
  return (
    <ScreenLayout loading={loading}>
      <FlatList
        onEndReachedThreshold={0.02}
        onEndReached={() =>
          fetchMore({
            variables: { page: data?.seeCoffeeShops?.length },
          })
        }
        style={{ width: '100%' }}
        data={data?.seeCoffeeShops}
        keyExtractor={(item) => item?.id + ''}
        renderItem={({ item: photo }) => <Photo photo={photo} />}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            onRefresh={refetch}
            refreshing={loading}
            tintColor="black"
          />
        }
      />
    </ScreenLayout>
  );
};

export default Home;
