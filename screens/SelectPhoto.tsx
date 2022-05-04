import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../colors';
import { SelectPhotoNavScreenProps } from '../navTypes';

const Container = styled.View`
  flex: 1;
`;

const Top = styled.View`
  flex: 1;
`;

const Bottom = styled.View`
  flex: 1;
`;

const ImageContainer = styled.TouchableOpacity``;

const IconContainer = styled.View`
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

const HeaderRightText = styled.Text`
  color: ${colors.ivory};
  font-size: 16px;
  font-weight: 600;
`;

const SelectPhoto = ({ navigation }: SelectPhotoNavScreenProps) => {
  const numColumns = 4;
  const { width } = useWindowDimensions();
  const [ok, setOk] = useState(false);
  const [photos, setPhotos] = useState<MediaLibrary.Asset[]>([]);
  const [chosenPhoto, setChosenPhoto] = useState('');
  const [photoLocal, setPhotoLocal] = useState('');
  const HeaderRight = () => (
    <TouchableOpacity
      onPress={() => navigation.navigate('UploadForm', { file: photoLocal })}
    >
      <HeaderRightText>다음</HeaderRightText>
    </TouchableOpacity>
  );
  const getPhotos = async () => {
    if (ok) {
      const { assets } = await MediaLibrary.getAssetsAsync();
      const { localUri } = await MediaLibrary.getAssetInfoAsync(assets[0].id);
      setPhotoLocal(localUri || '');
      setChosenPhoto(assets[0].uri);
      setPhotos(assets);
    }
  };
  const getPermissions = async () => {
    const { accessPrivileges, canAskAgain } =
      await MediaLibrary.getPermissionsAsync();
    if (accessPrivileges !== 'none' && canAskAgain) {
      const { accessPrivileges } = await MediaLibrary.requestPermissionsAsync();
      if (accessPrivileges !== 'none') {
        setOk(true);
        getPhotos();
      }
    } else if (accessPrivileges !== 'none') {
      setOk(true);
      getPhotos();
    }
  };
  useEffect(() => {
    getPermissions();
  }, [ok]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: HeaderRight,
    });
  }, [navigation, photos, photoLocal]);
  const choosePhoto = async (id: string) => {
    const { localUri, uri } = await MediaLibrary.getAssetInfoAsync(id);
    setPhotoLocal(localUri || '');
    setChosenPhoto(uri);
  };
  return (
    <Container>
      <Top>
        {chosenPhoto !== '' && (
          <Image
            source={{ uri: chosenPhoto }}
            style={{ width, height: '100%' }}
          />
        )}
      </Top>
      <Bottom>
        <FlatList
          data={photos}
          numColumns={numColumns}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <ImageContainer onPress={() => choosePhoto(item.id)}>
              <Image
                source={{ uri: item.uri }}
                style={{
                  width: width / numColumns,
                  height: 100,
                  marginBottom: 0.5,
                  ...(index % numColumns !== 3 && { marginRight: 0.5 }),
                }}
              />
              <IconContainer>
                <Ionicons
                  name="checkbox-outline"
                  size={18}
                  color={
                    item.uri === chosenPhoto ? colors.ivorySelected : 'white'
                  }
                />
              </IconContainer>
            </ImageContainer>
          )}
        />
      </Bottom>
    </Container>
  );
};

export default SelectPhoto;
