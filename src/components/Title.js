import React from 'react';
import styled from 'styled-components';
const Title = () => {
  return (
    <Wrapper>
      <h3>Password Generator</h3>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  h3 {
    color: var(--clr-gray-font);
  }
`;
export default Title;
