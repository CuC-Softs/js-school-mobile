import {View} from 'react-native';
import React, {useRef} from 'react';
import {Button, Headline, Text} from 'react-native-paper';
import {Form} from '@unform/mobile';
import TextInput from '../../components/form/TextInput';
import {FormHandles} from '@unform/core';
import Anchor from '../../components/common/Anchor';
import {useAuth} from '../../contexts/AuthContext';

const SignUp = () => {
  const formRef = useRef<FormHandles>(null);

  const {signUp} = useAuth();

  const handleSubmit = async (data: any) => {
    signUp(data);
  };

  return (
    <View style={{padding: 25, marginTop: 20}}>
      <Headline>Sign Up</Headline>
      <Form ref={formRef} style={{marginTop: 20}} onSubmit={handleSubmit}>
        <TextInput
          mode="outlined"
          name="name"
          label="Nome"
          returnKeyType="next"
        />
        <TextInput
          mode="outlined"
          name="email"
          keyboardType="email-address"
          label="Email"
          returnKeyType="next"
        />
        <TextInput
          mode="outlined"
          name="password"
          label="Senha"
          returnKeyType="send"
          secureTextEntry={true}
        />
        <TextInput
          mode="outlined"
          name="password_confirmation"
          label="Confirmação de Senha"
          returnKeyType="send"
          secureTextEntry={true}
        />
        <Text style={{marginTop: 10}}>
          já possui uma conta ? <Anchor to="SignIn">clique aqui</Anchor> para
          acessar.
        </Text>
        <Button
          style={{marginTop: 20}}
          mode="contained"
          onPress={() => {
            formRef.current?.submitForm();
          }}>
          Logar
        </Button>
      </Form>
    </View>
  );
};

export default SignUp;
