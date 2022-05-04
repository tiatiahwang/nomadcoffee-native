import { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../colors';
import DismissKeyboard from '../components/DismissKeyboard';
import { useSearchCoffeeShopLazyQuery } from '../graphql/generated';
import { SearchScreenProps } from '../navTypes';

const Input = styled.TextInput`
  padding: 0;
  margin: 0;
  text-align: center;
`;

const MessageContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const MessageText = styled.Text`
  margin-top: 15px;
  font-weight: 600;
  color: black;
`;

interface IForm {
  keyword: string;
}

const Search = ({ navigation }: SearchScreenProps) => {
  const numColumns = 3;
  const { width } = useWindowDimensions();
  const [searchQuery, { data, loading, called }] =
    useSearchCoffeeShopLazyQuery();
  const { control, handleSubmit } = useForm<IForm>();
  const onValid: SubmitHandler<IForm> = ({ keyword }) => {
    searchQuery({ variables: { keyword } });
  };
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Controller
          control={control}
          rules={{ required: true }}
          name="keyword"
          render={({ field: { onChange, value } }) => (
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              value={value}
              onChangeText={onChange}
              placeholder="커피샵 검색"
              placeholderTextColor={colors.ivory}
              returnKeyType="search"
              returnKeyLabel="search"
              onSubmitEditing={handleSubmit(onValid)}
            />
          )}
        />
      ),
    });
  }, [navigation, control, handleSubmit, onValid]);
  return (
    <DismissKeyboard>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        {loading && (
          <MessageContainer>
            <ActivityIndicator color={colors.ivory} />
            <MessageText>검색중...</MessageText>
          </MessageContainer>
        )}
        {!called && (
          <MessageContainer>
            <MessageText>키워드로 검색해주세요</MessageText>
          </MessageContainer>
        )}
        {data?.searchCoffeeShop?.length !== undefined ? (
          data?.searchCoffeeShop?.length === 0 ? (
            <MessageContainer>
              <MessageText>No result.</MessageText>
            </MessageContainer>
          ) : (
            <FlatList
              numColumns={numColumns}
              data={data?.searchCoffeeShop}
              keyExtractor={(item) => item?.id + ''}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Photo', { id: item?.id! })
                  }
                >
                  <Image
                    source={{ uri: item?.photos?.url }}
                    style={{
                      width: width / numColumns,
                      height: 100,
                      marginBottom: 3,
                      ...(index % 3 !== 2 && { marginRight: 3 }),
                    }}
                  />
                </TouchableOpacity>
              )}
            />
          )
        ) : null}
      </View>
    </DismissKeyboard>
  );
};

export default Search;
