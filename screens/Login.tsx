import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TextInput, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { logUserIn } from '../apollo/vars';
import { colors } from '../colors';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { Input } from '../components/auth/AuthShared';
import FormError from '../components/auth/FormError';
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
  result?: string;
}

const Login = ({ route }: LoginScreenProps) => {
  const navigation = useNavigation<LoginScreenProps['navigation']>();
  const [logInMutation, { loading }] = useLoginMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<IForm>({
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
        if (login.error) return setError('result', { message: login.error });
        if (!login?.ok || !login.token) return;
        console.log(errors?.result?.message);
        logUserIn(login.token);
      },
    });
  };
  const clearError = () => {
    if (errors.result) {
      clearErrors('result');
    }
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
            placeholder="?????? ??????"
            placeholderTextColor="#decdb4"
            returnKeyType="next"
            onChangeText={onChange}
            onChange={clearError}
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
            placeholder="????????????"
            placeholderTextColor={'#decdb4'}
            returnKeyType="done"
            secureTextEntry
            onChangeText={onChange}
            onChange={clearError}
            value={value}
            onSubmitEditing={handleSubmit(onValid)}
          />
        )}
      />
      <FormError error={errors?.result?.message} />
      <TouchableOpacity
        style={{ width: '100%' }}
        onPress={handleSubmit(onValid)}
      >
        <AuthButton text="?????????" isLoading={loading} />
      </TouchableOpacity>
      <TouchableOpacity style={{ width: '100%' }} onPress={goToCreateAccount}>
        <Button>????????????</Button>
      </TouchableOpacity>
    </AuthLayout>
  );
};

export default Login;
