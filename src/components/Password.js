import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

const Password = () => {
  const { password } = useGlobalContext();
  const [alert, setAlert] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }, [alert]);
  return (
    <>
      <Wrapper>
        <h4>{password}</h4>
        <div className='right-side'>
          <span className={`${alert ? 'alert show' : 'alert'}`}>Copied</span>

          <button
            className='btn'
            onClick={() => {
              setAlert(true);
              navigator.clipboard.writeText(password);
            }}
          >
            <FiCopy className='icon' />
          </button>
        </div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.article`
  padding: 0.75rem 1rem;
  background: var(--clr-gray-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .right-side {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  h4 {
    letter-spacing: var(--spacing);
  }
  .btn {
    background-color: transparent;
    border: transparent;
    color: var(--clr-green);
    cursor: pointer;
    svg {
      font-size: 1.5rem;
      color: var(--clr-green);
    }
  }
  .icon {
    color: var(--clr-green);
  }

  .alert {
    color: var(--clr-green);
    text-transform: uppercase;
    font-weight: 600;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s linear;
  }
  .show {
    opacity: 1;
    visibility: visible;
  }
`;
export default Password;
