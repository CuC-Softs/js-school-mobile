import React, {useRef} from 'react';
import {Headline, Text} from 'react-native-paper';
import TextInput from '../../components/form/TextInput';
import {FormHandles} from '@unform/core';
import Anchor from '../../components/common/Anchor';
import {useAuth} from '../../contexts/AuthContext';
import {TextInput as T} from 'react-native-paper';
import AuthLayout from '../../layouts/AuthLayout';
import {Form, SubmitButton} from './common';

const SignUp = () => {
  const formRef = useRef<FormHandles>(null);

  const {signUp} = useAuth();

  const handleSubmit = async (data: any) => {
    signUp(data);
  };

  return (
    <AuthLayout>
      <Headline>Sign Up</Headline>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <TextInput
          mode="outlined"
          name="name"
          label="Nome"
          left={<T.Icon name="user" />}
          returnKeyType="next"
        />
        <TextInput
          mode="outlined"
          name="email"
          left={<T.Icon name="mail" />}
          keyboardType="email-address"
          label="Email"
          returnKeyType="next"
        />
        <TextInput
          mode="outlined"
          name="password"
          label="Senha"
          left={<T.Icon name="lock" />}
          returnKeyType="send"
          secureTextEntry={true}
        />
        <TextInput
          mode="outlined"
          name="password_confirmation"
          label="Confirmação de Senha"
          left={<T.Icon name="lock" />}
          returnKeyType="send"
          secureTextEntry={true}
        />
        <Text style={{marginTop: 10}}>
          já possui uma conta ? <Anchor to="SignIn">clique aqui</Anchor> para
          acessar.
        </Text>
        <SubmitButton
          mode="contained"
          onPress={() => {
            formRef.current?.submitForm();
          }}>
          Registrar
        </SubmitButton>
      </Form>
    </AuthLayout>
  );
};

export default SignUp;
