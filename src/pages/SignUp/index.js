import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo/logo.png';

import Background from '~/components/Background';

import { Container, Form, FormInput, SubmitButton } from './styles';

function SignUp() {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="person-outline"
            autoCapitalize="words"
            placeholder="Nome completo"
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e=mail"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
          />

          <SubmitButton onPress={() => {}}>Criar conta</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

export default SignUp;
