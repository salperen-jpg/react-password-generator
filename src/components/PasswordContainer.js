import React from 'react';
import Title from './Title';
import styled from 'styled-components';
import Password from './Password';
import PasswordCreator from './PasswordCreator';

const PasswordContainer = () => {
  return (
    <Wrapper>
      <Title />
      <Password />
      <PasswordCreator />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 90vw;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default PasswordContainer;
