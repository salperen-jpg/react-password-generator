import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import { useGlobalContext } from '../context';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Strength from './Strength';
const PasswordCreator = () => {
  const {
    options: { uppercase, lowercase, numbers, symbols },
    optionChange,
    passwordLength,
    setPasswordLength,
    handleSubmit,
  } = useGlobalContext();
  return (
    <Wrapper>
      <div className='length'>
        <span>character length</span>
        <span className='pass-length'>{passwordLength}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type='range'
          name='passwordLength'
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
          min={0}
          max={20}
        />
        <Checkbox
          name='uppercase'
          value={uppercase}
          changeHandler={optionChange}
          label='include uppercase letters'
          checked={uppercase}
        />
        <Checkbox
          name='lowercase'
          value={lowercase}
          changeHandler={optionChange}
          label='include lowercase letters'
          checked={lowercase}
        />
        <Checkbox
          name='numbers'
          value={numbers}
          changeHandler={optionChange}
          label='include numbers'
          checked={numbers}
        />
        <Checkbox
          name='symbols'
          value={symbols}
          changeHandler={optionChange}
          label='include symbols'
          checked={symbols}
        />
        <Strength />
        <button
          className='submit-btn'
          type='submit'
          disabled={!uppercase && !lowercase && !symbols && !numbers}
        >
          generate
          <AiOutlineArrowRight />
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0.75rem 1rem;
  background-color: var(--clr-gray-color);
  .length {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-size: 0.9rem;
      letter-spacing: var(--spacing);
    }
    .pass-length {
      font-size: 2.5rem;
      color: var(--clr-green);
      font-family: var(--secondary-font);
      font-weight: 600;
    }
  }
  input[type='range'] {
    width: 100%;
    display: inline-block;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  .checkbox {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 20px 1fr;
    gap: 1rem;
    p {
      text-transform: capitalize;
      letter-spacing: 1px;
    }
  }
  .submit-btn {
    display: inline-block;
    margin-top: 1.5rem;
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-transform: uppercase;
    color: var(--clr-green);
    background-color: transparent;
    border: 1px solid var(--clr-green);
    transition: var(--transition);
    font-weight: 600;
    letter-spacing: var(--spacing);
  }
  .submit-btn:hover {
    background-color: #adffad;
    color: #000;
  }
  .submit-btn:disabled {
    cursor: not-allowed;
  }
`;
export default PasswordCreator;
