import { UploadFormScreenProps } from '../navTypes';
import styled from 'styled-components/native';
import { colors } from '../colors';
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useRef } from 'react';
import { ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import DismissKeyboard from '../components/DismissKeyboard';
import { useCreateCoffeeShopMutation } from '../graphql/generated';
import { ReactNativeFile } from 'apollo-upload-client';

const Container = styled.View`
  flex: 1;
  padding: 0 50px;
`;

const Photo = styled.Image`
  height: 300px;
`;

const CaptionContainer = styled.View`
  margin-top: 30px;
`;

const Caption = styled.TextInput`
  border: 1px solid #e5e5e5;
  padding: 10px;
  border-radius: 7px;
  margin-bottom: 5px;
`;

const HeaderRightText = styled.Text`
  color: ${colors.ivory};
  font-size: 16px;
  font-weight: 600;
  margin-right: 7px;
`;

interface IForm {
  coffeeShopName: string;
  address?: string;
  description?: string;
  categories: string;
}

const UploadForm = ({ route, navigation }: UploadFormScreenProps) => {
  const [createCoffeeShopMutation, { loading }] = useCreateCoffeeShopMutation({
    update: (cache, { data }) => {
      console.log(data);
      const coffeeShop = data?.createCoffeeShop;
      if (coffeeShop) {
        cache.modify({
          id: 'ROOT_QUERY',
          fields: { seeCoffeeShops: (prev) => [coffeeShop, ...prev] },
        });
        navigation.navigate('TabsNav');
      }
    },
  });
  const { control, handleSubmit } = useForm<IForm>();
  const addressRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoriesRef = useRef(null);

  const onNext = (next: React.RefObject<TextInput>) => next.current?.focus();

  const onValid = (data: IForm) => {
    if (loading) return;
    const { coffeeShopName, address, description, categories } = data;
    const photos = new ReactNativeFile({
      uri: route.params.file,
      name: 'hi.jpg',
      type: 'image/jpeg',
    });
    createCoffeeShopMutation({
      variables: {
        name: coffeeShopName,
        address,
        description,
        categories,
        photos,
      },
    });
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        loading ? (
          <ActivityIndicator
            size="small"
            color={colors.ivory}
            style={{ marginRight: 10 }}
          />
        ) : (
          <TouchableOpacity onPress={handleSubmit(onValid)}>
            <HeaderRightText>다음</HeaderRightText>
          </TouchableOpacity>
        ),
      ...(loading && { headerLeft: () => null }),
    });
  }, [navigation, loading, handleSubmit, onValid]);
  return (
    <DismissKeyboard>
      <Container>
        <Photo resizeMode="contain" source={{ uri: route.params.file }} />
        <CaptionContainer>
          <Controller
            control={control}
            rules={{ required: true }}
            name="coffeeShopName"
            render={({ field: { onChange, value } }) => (
              <Caption
                autoFocus
                autoCapitalize="none"
                placeholder="커피샵 이름"
                placeholderTextColor={colors.ivorySelected}
                onChangeText={onChange}
                value={value}
                onSubmitEditing={() => onNext(addressRef)}
                returnKeyType="next"
              />
            )}
          />
          <Controller
            control={control}
            name="address"
            render={({ field: { onChange, value } }) => (
              <Caption
                autoCapitalize="none"
                placeholder="커피샵 주소"
                placeholderTextColor={colors.ivorySelected}
                onChangeText={onChange}
                value={value}
                onSubmitEditing={() => onNext(descriptionRef)}
                returnKeyType="next"
              />
            )}
          />
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value } }) => (
              <Caption
                autoCapitalize="none"
                placeholder="커피샵 설명"
                placeholderTextColor={colors.ivorySelected}
                onChangeText={onChange}
                value={value}
                onSubmitEditing={() => onNext(categoriesRef)}
                returnKeyType="next"
              />
            )}
          />
          <Controller
            control={control}
            name="categories"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Caption
                autoCapitalize="none"
                placeholder="해쉬태그로 입력해주세요 ex) #개발자"
                placeholderTextColor={colors.ivorySelected}
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(onValid)}
                returnKeyType="done"
              />
            )}
          />
        </CaptionContainer>
      </Container>
    </DismissKeyboard>
  );
};

export default UploadForm;
