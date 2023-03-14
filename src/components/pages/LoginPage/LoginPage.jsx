import { Container, ContentWrapper } from './LoginPage.styled';

import { AuthForm } from '../../AuthForm/AuthForm';
import { useSelector } from 'react-redux';
import { getLang } from '../../../redux/lang/langSelectors';

const LoginPage = () => {
  const lang = useSelector(getLang).lang;
  return (
    <Container>
      <ContentWrapper>
        <AuthForm
          formTitle="login"
          btnText={lang === 'en' ? 'Log in' : 'Логін'}
          navLinkText={lang === 'en' ? 'Register' : 'Реєстрація'}
          navLinkAdress="/register"
          hintText={
            lang === 'en'
              ? 'You can log in using an email and password, after registering:'
              : 'Залогіньтесь, використовуючи ваш емейл та пароль, після реєстрації:'
          }
        />
      </ContentWrapper>
    </Container>
  );
};

export default LoginPage;
