import { useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { logUserOut } from '../apollo/vars';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import Avatar from '../components/Avatar';
import useMe from '../hooks/useMe';
import { ProfileScreenProps } from '../navTypes';

const Title = styled.Text`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 28px;
`;

const BottomBox = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 7px 10px;
  margin-bottom: 7px;
`;

const Label = styled.Text`
  margin-right: 20px;
  width: 20%;
`;

const Content = styled.Text``;

const Profile = ({ route, navigation }: ProfileScreenProps) => {
  useEffect(() => {
    if (route?.params?.username) {
      navigation.setOptions({ title: route.params.username });
    }
  });
  return (
    <Text>{route.params.username}</Text>
    // <AuthLayout>
    //   <Title>유저 정보</Title>
    //   <Avatar size={100} url={data?.me?.avatarURL} />
    //   <BottomBox style={{ marginTop: 28 }}>
    //     <Label>계정이름</Label>
    //     <Content>{data?.me?.username}</Content>
    //   </BottomBox>
    //   <BottomBox style={{ marginBottom: 28 }}>
    //     <Label>이메일</Label>
    //     <Content>{data?.me?.email}</Content>
    //   </BottomBox>
    //   <TouchableOpacity style={{ width: '100%' }} onPress={logUserOut}>
    //     <AuthButton text="로그아웃" isLoading={false} />
    //   </TouchableOpacity>
    // </AuthLayout>
  );
};

export default Profile;
