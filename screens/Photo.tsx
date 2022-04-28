import { RefreshControl, ScrollView } from 'react-native';
import Photo from '../components/Photo';
import ScreenLayout from '../components/ScreenLayout';
import { useSeeCoffeeShopQuery } from '../graphql/generated';
import { PhotoScreenProps } from '../navTypes';

const PhotoScreen = ({ route }: PhotoScreenProps) => {
  const { data, loading, refetch } = useSeeCoffeeShopQuery({
    variables: { id: route?.params.id },
  });
  return (
    <ScreenLayout loading={loading}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetch} />
        }
      >
        <Photo photo={data?.seeCoffeeShop} />
      </ScrollView>
    </ScreenLayout>
  );
};

export default PhotoScreen;
