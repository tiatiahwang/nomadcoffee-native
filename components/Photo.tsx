import { useReactiveVar } from '@apollo/client';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import styled from 'styled-components/native';
import { isLoggedInVar } from '../apollo/vars';
import { colors } from '../colors';
import {
  SeeCoffeeShopsQuery,
  useToggleLikeMutation,
} from '../graphql/generated';
import { HomeScreenProps } from '../navTypes';
import Avatar from './Avatar';

const Container = styled.View`
  background-color: white;
`;
const Header = styled.TouchableOpacity`
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;
const Username = styled.Text`
  font-weight: 600;
`;
const File = styled.Image``;
const Actions = styled.View`
  flex-direction: row;
  align-items: center;
`;
const Action = styled.TouchableOpacity`
  margin-right: 10px;
`;
const Caption = styled.View`
  flex-direction: row;
`;
const CaptionText = styled.Text`
  padding: 7px 10px;
  color: ${colors.ivory};
  border: 1px solid ${colors.ivory};
  margin-right: 5px;
  border-radius: 5px;
`;
const Likes = styled.Text`
  margin: 7px 0;
  font-weight: 600;
`;
const ExtraContainer = styled.View`
  padding: 0px 10px;
`;

type ArrayElement<ArrayType extends readonly unknown[] | null | undefined> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
interface Props {
  photo: ArrayElement<SeeCoffeeShopsQuery['seeCoffeeShops']>;
}

const Photo = ({ photo }: Props) => {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const navigation = useNavigation<HomeScreenProps['navigation']>();
  const { width } = useWindowDimensions();
  const [imgHeight, setImgHeight] = useState(0);

  const [toggleLikeMutation] = useToggleLikeMutation({
    variables: { id: photo?.id! },
    update: (cache, { data }) => {
      if (!data?.toggleLike.ok || !photo) return;
      const id = `Photo:${photo?.id!}`;
      cache.modify({
        id,
        fields: {
          isLiked: (prev) => !prev,
          likes: (prev) => (!photo.isLiked ? prev + 1 : prev - 1),
        },
      });
    },
  });

  const goToProfile = () =>
    navigation.navigate('Profile', { username: photo?.user?.username! });
  useEffect(() => {
    const file = photo?.photos[0]?.url!;
    Image.getSize(file, (w, h) => {
      setImgHeight((h * width) / w);
    });
  }, [photo]);
  return (
    <Container>
      <Header onPress={goToProfile}>
        <Avatar src={photo?.user?.avatarURL} size={40} />
        <Username style={{ marginLeft: 10 }}>{photo?.user?.username}</Username>
      </Header>
      <File
        style={{ width, height: width || imgHeight }}
        source={{ uri: photo?.photos[0]?.url }}
      />
      <ExtraContainer>
        {isLoggedIn && (
          <Actions>
            <Action onPress={() => toggleLikeMutation()}>
              <Ionicons
                name={photo?.isLiked ? 'heart' : 'heart-outline'}
                color="#d0b894"
                size={25}
              />
            </Action>
            <Action>
              <Ionicons name="chatbubble-outline" color="#d0b894" size={22} />
            </Action>
          </Actions>
        )}
        <TouchableOpacity>
          <Likes>
            {photo?.likes === 0
              ? '0 like'
              : photo?.likes === 1
              ? '1 like'
              : `${photo?.likes} likes`}
          </Likes>
        </TouchableOpacity>
        <Caption>
          {photo?.categories?.map((category, index) => (
            <CaptionText key={index}>{category.name}</CaptionText>
          ))}
        </Caption>
      </ExtraContainer>
    </Container>
  );
};

export default Photo;
