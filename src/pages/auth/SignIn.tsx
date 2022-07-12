import {View} from 'react-native';
import React, {useRef} from 'react';
import {Button, Headline, Text} from 'react-native-paper';
import {Form} from '@unform/mobile';
import TextInput from '../../components/form/TextInput';
import {FormHandles} from '@unform/core';
import Anchor from '../../components/common/Anchor';
import {useAuth} from '../../contexts/AuthContext';

const SignIn = () => {
  const {signIn} = useAuth();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: any) => {
    signIn(data);
  };

  return (
    <View style={{padding: 25, marginTop: 20}}>
      <Headline>Sign In</Headline>
      <Form ref={formRef} style={{marginTop: 20}} onSubmit={handleSubmit}>
        <TextInput
          mode="outlined"
          keyboardType="email-address"
          name="email"
          label="Email"
        />
        <TextInput
          mode="outlined"
          name="password"
          label="Senha"
          secureTextEntry={true}
        />
        <Text style={{marginTop: 10}}>
          ainda não possui uma conta ? <Anchor to="SignUp">clique aqui</Anchor>{' '}
          para criar.
        </Text>
        <Button
          style={{marginTop: 10}}
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

export default SignIn;
