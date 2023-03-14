import { Container, ContentWrapper } from './RegisterPage.styled';

import { AuthForm } from '../../AuthForm/AuthForm';
import { getLang } from '../../../redux/lang/langSelectors';
import { useSelector } from 'react-redux';

const RegisterPage = () => {
  const lang = useSelector(getLang).lang;

  return (
    <Container>
      <ContentWrapper>
        <AuthForm
          formTitle="register"
          btnText={lang === 'en' ? 'Register' : 'Реєстрація'}
          navLinkText={lang === 'en' ? 'Log in' : 'Логін'}
          navLinkAdress="/"
          hintText={
            lang === 'en'
              ? 'Or log in using an email and password, after registering:'
              : 'Або залогіньтесь, використовуючи ваш емейл та пароль, після реєстрації:'
          }
        />
      </ContentWrapper>
    </Container>
  );
};

export default RegisterPage;
