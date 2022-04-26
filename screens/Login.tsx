import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { logUserIn } from '../apollo/vars';
import { colors } from '../colors';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { Input } from '../components/auth/AuthShared';
import { useLoginMutation } from '../graphql/generated';
import { LoginScreenProps } from '../navTypes';

const Button = styled.Text`
  color: ${colors.ivory};
  font-weight: 600;
  text-align: center;
  font-size: 16px;
  margin-top: 8px;
`;

interface IForm {
  username: string;
  password: string;
}

const Login = ({ route }: LoginScreenProps) => {
  const navigation = useNavigation<LoginScreenProps['navigation']>();
  const [logInMutation, { loading }] = useLoginMutation();
  const { control, handleSubmit } = useForm<IForm>({
    defaultValues: {
      username: route?.params?.username || '',
      password: route?.params?.password || '',
    },
  });
  const passwordRef = useRef(null);
  const onNext = (next: React.RefObject<TextInput>) => next.current?.focus();
  const onValid: SubmitHandler<IForm> = (data) => {
    if (loading) return;
    logInMutation({
      variables: data,
      onCompleted: ({ login }) => {
        if (!login?.ok || !login.token) return;
        logUserIn(login.token);
      },
    });
  };
  const goToCreateAccount = () => navigation.navigate('CreateAccount');
  return (
    <AuthLayout>
      <Controller
        control={control}
        rules={{ required: true }}
        name="username"
        render={({ field: { onChange, value } }) => (
          <Input
            autoFocus
            autoCapitalize="none"
            placeholder="계정 이름"
            placeholderTextColor="#decdb4"
            returnKeyType="next"
            onChangeText={onChange}
            value={value}
            onSubmitEditing={() => onNext(passwordRef)}
          />
        )}
      />
      <Controller
        control={control}
        rules={{ required: true }}
        name="password"
        render={({ field: { onChange, value } }) => (
          <Input
            ref={passwordRef}
            placeholder="비밀번호"
            placeholderTextColor={'#decdb4'}
            returnKeyType="done"
            secureTextEntry
            last={true}
            onChangeText={onChange}
            value={value}
            onSubmitEditing={handleSubmit(onValid)}
          />
        )}
      />
      <TouchableOpacity
        style={{ width: '100%' }}
        onPress={handleSubmit(onValid)}
      >
        <AuthButton text="로그인" isLoading={loading} />
      </TouchableOpacity>
      <TouchableOpacity style={{ width: '100%' }} onPress={goToCreateAccount}>
        <Button>회원가입</Button>
      </TouchableOpacity>
    </AuthLayout>
  );
};

export default Login;
