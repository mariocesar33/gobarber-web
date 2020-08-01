import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';

import getValidationErros from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';
import { error } from 'console';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  console.log(formRef);

  const handleSubmit = useCallback(async(data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('campo obrigatório'),
        email: Yup.string().required('campo obrigatório').email('Digite um e-mail válido'),
        password: Yup.string()
          .min(8, 'menimo de 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErros(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return ( 
    <Container>
    <Background />
    
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Faca o seu cadastro</h1>

        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input 
          name="password" 
          icon={FiLock} 
          type="password" 
          placeholder="Senha" 
        />

        <Button type="submit">Cadastrar</Button>
      </Form>

      <a href="forget">
        <FiArrowLeft />
        Voltar para logon
      </a>
    </Content>
  </Container>
  );
};

export default SignUp;