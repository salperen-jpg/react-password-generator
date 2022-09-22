import React, { useContext, useEffect, useState } from 'react';
import {
  getLowerCase,
  getUpperCase,
  getNumber,
  getSymbolSign,
} from './helpers';
const PasswordContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [password, setPassword] = useState('P4SSWORD$');
  const [passwordLength, setPasswordLength] = useState(6);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: false,
    symbols: false,
  });
  const [strength, setStrength] = useState('Low');
  const [strengthLevel, setStrenghtLevel] = useState(1);

  useEffect(() => {
    const trueNumber = Object.values(options).filter(
      (opt) => opt === true
    ).length;

    setStrenghtLevel(trueNumber);
    setStrength(
      trueNumber === 1
        ? 'Too low'
        : trueNumber === 2
        ? 'Low'
        : trueNumber === 3
        ? 'Medium'
        : 'Strong'
    );
  }, [options]);

  const handleStrength = (e) => {
    const str = Number(e.target.dataset.strength);
    if (str === 1) {
      setPasswordLength(6);
      setOptions({
        symbols: false,
        numbers: false,
        uppercase: true,
        lowercase: false,
      });
      setStrenghtLevel(1);
      setStrength('Too low');
    }
    if (str === 2) {
      setPasswordLength(8);
      setOptions({
        symbols: false,
        numbers: false,
        uppercase: true,
        lowercase: true,
      });
      setStrenghtLevel(2);
      setStrength('Low');
    }
    if (str === 3) {
      setPasswordLength(10);
      setOptions({
        symbols: false,
        uppercase: true,
        lowercase: true,
        numbers: true,
      });
      setStrenghtLevel(3);
      setStrength('Medium');
    }
    if (str === 4) {
      setPasswordLength(12);
      setOptions({
        ...options,
        uppercase: true,
        lowercase: true,
        symbols: true,
        numbers: true,
      });
      setStrenghtLevel(4);
      setStrength('Strong');
    }
  };

  const optionChange = (e) => {
    const name = e.target.name;
    const value = e.target.checked;
    setOptions({ ...options, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { uppercase, lowercase, numbers, symbols } = options;
    let newPass = [];
    if (uppercase && lowercase && numbers && symbols) {
      newPass = [getUpperCase(), getLowerCase(), getNumber(), getSymbolSign()];
    }
    while (newPass.length < passwordLength) {
      const random = Math.floor(Math.random() * 4);
      if (lowercase && random === 0) {
        newPass = [...newPass, getLowerCase()];
      }
      if (uppercase && random === 1) {
        newPass = [...newPass, getUpperCase()];
      }
      if (numbers && random === 2) {
        newPass = [...newPass, getNumber()];
      }
      if (symbols && random === 3) {
        newPass = [...newPass, getSymbolSign()];
      }
    }

    newPass.sort(() => 0.5 - Math.random());
    setPassword(newPass.join(''));
  };

  return (
    <PasswordContext.Provider
      value={{
        password,
        passwordLength,
        setPasswordLength,
        options,
        optionChange,
        handleSubmit,
        strength,
        handleStrength,
        strengthLevel,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(PasswordContext);
};
