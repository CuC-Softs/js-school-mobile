import {View} from 'react-native';
import React, {useRef} from 'react';
import {Button, Text} from 'react-native-paper';
import {Form} from '@unform/mobile';
import TextInput from '../../components/form/TextInput';
import {FormHandles} from '@unform/core';
import Anchor from '../../components/common/Anchor';

const SignUp = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <View style={{padding: 50}}>
      <Text>SignUp</Text>
      <Form ref={formRef} style={{marginTop: 20}} onSubmit={handleSubmit}>
        <TextInput name="name" label="Nome" returnKeyType="next" />
        <TextInput name="email" label="Email" returnKeyType="next" />
        <TextInput
          name="password"
          label="Senha"
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
