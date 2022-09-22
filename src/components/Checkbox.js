import React from 'react';

const Checkbox = ({ name, value, changeHandler, label, checked }) => {
  return (
    <div className='checkbox'>
      <input
        type='checkbox'
        name={name}
        value={value}
        onChange={changeHandler}
        checked={checked}
      />
      <p>{label}</p>
    </div>
  );
};

export default Checkbox;
