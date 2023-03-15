import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f0f0f0;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    padding: 20px;
    width: 50%;

    input[type='text'],
    input[type='email'],
    input[type='password'] {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: none;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    }

    button[type='submit'] {
      background-color: #4caf50;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: #357a38;
      }
    }
  }
`;
