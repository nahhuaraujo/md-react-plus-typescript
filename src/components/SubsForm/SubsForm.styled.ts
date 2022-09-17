import styled from 'styled-components';

export const SubsForm = styled.div`
  > form {
    > input {
      background-color: transparent;
      display: block;
      padding: 0.5rem;
      margin: 0.5rem;
      color: white;
    }
    > textarea {
      display: block;
      min-height: 50px;
      padding: 0.5rem;
      margin: 0.5rem;
      font-family: inherit;
    }
    > button {
      background-color: transparent;
      padding: 0.5rem;
      margin: 0.5rem;
      border: 1px solid red;
      color: white;
    }
  }
`;
