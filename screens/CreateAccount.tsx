import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TextInput, TouchableOpacity } from 'react-native';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { Input } from '../components/auth/AuthShared';
import FormError from '../components/auth/FormError';
import { useCreateAccountMutation } from '../graphql/generated';
import { CreateAccountScreenProps } from '../navTypes';

interface IForm {
  email: string;
  username: string;
  password: string;
  result?: string;
}

const CreateAccount = () => {
  const navigation = useNavigation<CreateAccountScreenProps['navigation']>();
  useEffect(() => {
    navigation.setOptions({ title: '계정 생성' });
  }, [navigation]);

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<IForm>();
  const [createAccountMutation, { loading }] = useCreateAccountMutation();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onNext = (next: React.RefObject<TextInput>) => next.current?.focus();

  const onValid: SubmitHandler<IForm> = (data) => {
    if (loading) return;
    createAccountMutation({
      variables: data,
      onCompleted: ({ createAccount }) => {
        if (createAccount.error)
          return setError('result', { message: createAccount.error });
        if (!createAccount.ok) return;
        const { username, password } = getValues();
        navigation.navigate('Login', { username, password });
      },
    });
  };
  const clearError = () => {
    if (errors.result) {
      clearErrors('result');
    }
  };
  return (
    <AuthLayout>
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: {
            value: 3,
            message: '3자 이상 입력해주세요',
          },
        }}
        name="username"
        render={({ field: { onChange, value } }) => (
          <>
            <Input
              autoCapitalize="none"
              placeholder="계정 이름"
              placeholderTextColor="#decdb4"
              returnKeyType="next"
              onSubmitEditing={() => onNext(emailRef)}
              autoFocus
              onChangeText={onChange}
              onChange={clearError}
              value={value}
            />
          </>
        )}
      />
      <FormError error={errors?.username?.message} noSpace={true} />
      <Controller
        control={control}
        rules={{
          required: true,
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: '이메일 형식으로 입력해주세요',
          },
        }}
        name="email"
        render={({ field: { onChange, value } }) => (
          <>
            <Input
              autoCapitalize="none"
              ref={emailRef}
              placeholder="이메일"
              placeholderTextColor="#decdb4"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() => onNext(passwordRef)}
              onChangeText={onChange}
              onChange={clearError}
              value={value}
            />
          </>
        )}
      />
      <FormError error={errors?.email?.message} noSpace={true} />
      <Controller
        control={control}
        rules={{
          required: true,
          minLength: {
            value: 6,
            message: '6자 이상 입력해주세요',
          },
        }}
        name="password"
        render={({ field: { onChange, value } }) => (
          <>
            <Input
              ref={passwordRef}
              placeholder="비밀번호"
              placeholderTextColor="#decdb4"
              returnKeyType="done"
              secureTextEntry
              onChangeText={onChange}
              onChange={clearError}
              value={value}
              onSubmitEditing={handleSubmit(onValid)}
            />
          </>
        )}
      />
      <FormError error={errors?.password?.message} noSpace={true} />
      <TouchableOpacity
        style={{ width: '100%' }}
        onPress={handleSubmit(onValid)}
      >
        <AuthButton text="계정 생성" isLoading={loading} />
      </TouchableOpacity>
      <FormError error={errors?.result?.message} />
    </AuthLayout>
  );
};

export default CreateAccount;
