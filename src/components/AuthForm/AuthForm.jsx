// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
// import { useState } from 'react';
// import { FcGoogle } from 'react-icons/fc';
// // import { logIn, Register } from '../../redux/auth/operations';

// import { NavLink } from '../NavLink/NavLink';
// import { Btn } from '../Buttons/Btn';

// import eyeOpened from '../../../src/assets/icons/eye-blocked.svg';
// import eyeClosed from '../../../src/assets/icons/eye-blocked.svg';

// import {
//   Input,
//   Label,
//   BtnsWrapper,
//   FormWrapper,
//   InputWrapper,
//   Form,
//   InputsWrapper,
//   Hint,
//   HintLeft,
//   ErrorText,
//   GoogleLoginLink,
//   PasswordBtn,
//   PasswordIcon,
// } from './AuthForm.styled';

// export const AuthForm = ({ hintText }) => {
//   //   const dispatch = useDispatch();
//   //   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [formTitle, setFormTitle] = useState('login');
//   const [isRegistred, setIsRegistred] = useState(false);
//   const [error, setError] = useState(false);
//   const [isPasswordShown, setIsPasswordShown] = useState(false);

//   const handleShowPassword = () => {
//     setIsPasswordShown(!isPasswordShown);
//   };

//   const onInputChange = event => {
//     switch (event.target.name) {
//       case 'email':
//         setEmail(event.target.value);
//         break;
//       case 'password':
//         setPassword(event.target.value);
//         break;
//       default:
//         return;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();

//     // if (email.trim().length === 0 || password.trim().length === 0) {
//     //   setError(true);
//     //   return null;
//     // }
//     // if (formTitle === 'login') {
//     //   dispatch(logIn({ email, password }));
//     // } else {
//     //   dispatch(Register({ email, password }));
//     //   navigate('/');
//     // }

//     resetForm();
//   };

//   const resetForm = () => {
//     setEmail('');
//     setPassword('');
//     setError(false);
//   };

//   return (
//     <FormWrapper>
//       {formTitle === 'login' && (
//         <>
//           {<Hint>Ви можете залогінитись через Google Account:</Hint>}
//           <GoogleLoginLink href="">
//             <FcGoogle />
//             Google
//           </GoogleLoginLink>
//         </>
//       )}
//       <Form onSubmit={handleSubmit}>
//         <HintLeft>
//           {
//             <Hint>
//               Залогіньтесь, використовуючи ваш емейл та пароль, після
//               реєстрації:
//             </Hint>
//           }
//         </HintLeft>
//         <InputsWrapper>
//           <InputWrapper>
//             <Label htmlFor="auth-email">
//               {error && <ErrorText>*</ErrorText>}
//               {<span>Електронна скринька</span>}
//             </Label>
//             <Input
//               type="email"
//               id="auth-email"
//               name="email"
//               value={email}
//               pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
//               placeholder="your@email.com"
//               onChange={onInputChange}
//               onInvalid={e => {
//                 setError(true);
//               }}
//             />
//             {error && <ErrorText>Це обов'язкове поле</ErrorText>}
//           </InputWrapper>
//           <InputWrapper>
//             <Label htmlFor="auth-password">
//               {error && <ErrorText>*</ErrorText>}
//               {<span>Пароль</span>}
//             </Label>
//             <Input
//               type={isPasswordShown ? 'text' : 'password'}
//               id="auth-password"
//               name="password"
//               value={password}
//               minLength="8"
//               placeholder="Пароль"
//               onChange={onInputChange}
//               onInvalid={e => {
//                 setError(true);
//               }}
//             />
//             <PasswordBtn onClick={handleShowPassword} type="button">
//               <PasswordIcon
//                 src={isPasswordShown ? eyeOpened : eyeClosed}
//                 alt="Button show/hide password"
//               />
//             </PasswordBtn>
//             {error && <ErrorText>Це обов'язкове поле</ErrorText>}
//           </InputWrapper>
//         </InputsWrapper>
//         {/* <BtnsWrapper>
//           <Btn type="submit" text="Логін" />
//           <NavLink text="Реєстрація" />
//         </BtnsWrapper> */}
//       </Form>
//     </FormWrapper>
//   );
// };

// export default AuthForm;

import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.PrimaryWhite};
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 30px;
  padding: 40px 20px;
  gap: 32px;
  @media screen and (min-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 426px;
    padding: 56px 84px;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  }
`;

const Label = styled.label`
  margin: 0.5rem 0;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 17px 18px;
  width: 100%;
  font-size: 14px;
  font-family: 'Roboto';
  background-color: ${p => p.theme.colors.SecondGray};
  border-radius: 30px;
  border: none;
  color: ${p => p.theme.colors.authFormInputText};
  margin-bottom: 4px;
  &::placeholder {
    color: ${p => p.theme.colors.placeholderGrey};
  }
  &:focus {
    color: ${p => p.theme.colors.authFormInputText};
    outline: 1px solid ${p => p.theme.colors.PrimaryOrange};
    -moz-outline-radius: 30px;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>Username:</Label>
      <Input
        type="text"
        placeholder="your@email.com"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <Label>Email:</Label>
      <Input
        type="email"
        value={email}
        placeholder="your@email.com"
        onChange={e => setEmail(e.target.value)}
      />

      <Label>Password:</Label>
      <Input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <Button type="submit">Register</Button>
    </Form>
  );
};

export default AuthForm;
