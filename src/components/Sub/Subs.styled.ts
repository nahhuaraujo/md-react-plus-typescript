import styled from 'styled-components';

const redSolidBorder = '1px solid red';

export const SubImg = styled.img`
  padding: 0.4rem;
  width: 100px;
  border-radius: 200px;
  border: ${redSolidBorder};
`;

export const Sub = styled.li`
  list-style: none;
  min-width: fit-content;
  max-width: 300px;
  padding: 1rem;
  margin: 1rem;
  border: ${redSolidBorder};

  &:hover {
    background-color: lightgrey;
    color: black;
    transition: 600ms;
  }
`;
