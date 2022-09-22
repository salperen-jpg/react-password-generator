import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { strengthData } from '../helpers';
const Strength = () => {
  const { strength, handleStrength, strengthLevel } = useGlobalContext();

  const blockClass =
    strengthLevel === 1
      ? 'red'
      : strengthLevel === 2
      ? 'orange'
      : strengthLevel === 3
      ? 'yellow'
      : 'green';

  return (
    <Wrapper>
      <span className='strength'>strength</span>
      <div className='right'>
        <span>{strength}</span>
        <div className='blocks'>
          {strengthData.map((item, index) => {
            const { id } = item;
            return (
              <div
                key={id}
                className={`block ${index < strengthLevel && blockClass}`}
                data-strength={id}
                onClick={handleStrength}
              ></div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: rgba(24, 23, 31, 1);
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .strength {
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 2px;
  }

  /* RIGHT */
  .right {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      text-transform: uppercase;
      font-size: 0.8rem;
      color: var(--clr-gray-font);
      letter-spacing: 2px;
    }
  }
  /* BLOCKS */
  .blocks {
    display: flex;
    gap: 0.5rem;
  }
  .block {
    width: 11px;
    height: 30px;
    border: 2px solid white;
  }
`;

export default Strength;
