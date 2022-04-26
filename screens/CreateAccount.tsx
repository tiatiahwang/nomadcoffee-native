import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { TextInput, TouchableOpacity } from 'react-native';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { Input } from '../components/auth/AuthShared';
import { useCreateAccountMutation } from '../graphql/generated';
import { CreateAccountScreenProps } from '../navTypes';

interface IForm {
  email: string;
  username: string;
  password: string;
}

const CreateAccount = () => {
  const navigation = useNavigation<CreateAccountScreenProps['navigation']>();
  useEffect(() => {
    navigation.setOptions({ title: '계정 생성' });
  }, [navigation]);

  const { control, handleSubmit, getValues } = useForm<IForm>();
  const [createAccountMutation, { loading }] = useCreateAccountMutation();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onNext = (next: React.RefObject<TextInput>) => next.current?.focus();

  const onValid: SubmitHandler<IForm> = (data) => {
    if (loading) return;
    createAccountMutation({
      variables: data,
      onCompleted: ({ createAccount }) => {
        if (!createAccount.ok) return;
        const { username, password } = getValues();
        navigation.navigate('Login', { username, password });
      },
    });
  };
  return (
    <AuthLayout>
      <Controller
        control={control}
        rules={{ required: true }}
        name="username"
        render={({ field: { onChange, value } }) => (
          <Input
            autoCapitalize="none"
            placeholder="계정 이름"
            placeholderTextColor="#decdb4"
            returnKeyType="next"
            onSubmitEditing={() => onNext(emailRef)}
            autoFocus
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        rules={{ required: true }}
        name="email"
        render={({ field: { onChange, value } }) => (
          <Input
            autoCapitalize="none"
            ref={emailRef}
            placeholder="이메일"
            placeholderTextColor="#decdb4"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => onNext(passwordRef)}
            onChangeText={onChange}
            value={value}
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
            placeholderTextColor="#decdb4"
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
        <AuthButton text="계정 생성" isLoading={loading} />
      </TouchableOpacity>
    </AuthLayout>
  );
};

export default CreateAccount;
