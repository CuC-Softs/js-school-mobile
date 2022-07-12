import React, {useRef} from 'react';
import {Headline} from 'react-native-paper';
import TextInput from '../../components/form/TextInput';
import {TextInput as T} from 'react-native-paper';
import {FormHandles} from '@unform/core';
import Anchor from '../../components/common/Anchor';
import {useAuth} from '../../contexts/AuthContext';
import AuthLayout from '../../layouts/AuthLayout';
import {CTAText, Form, SubmitButton} from './common';

const SignIn = () => {
  const {signIn} = useAuth();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: any) => {
    signIn(data);
  };

  return (
    <AuthLayout>
      <Headline>Sign In</Headline>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <TextInput
          mode="outlined"
          keyboardType="email-address"
          name="email"
          left={<T.Icon name="mail" />}
          label="Email"
        />
        <TextInput
          mode="outlined"
          name="password"
          label="Senha"
          left={<T.Icon name="lock" />}
          secureTextEntry={true}
        />
        <CTAText>
          ainda não possui uma conta ? <Anchor to="SignUp">clique aqui</Anchor>{' '}
          para criar.
        </CTAText>
        <SubmitButton
          mode="contained"
          onPress={() => {
            formRef.current?.submitForm();
          }}>
          Logar
        </SubmitButton>
      </Form>
    </AuthLayout>
  );
};

export default SignIn;
