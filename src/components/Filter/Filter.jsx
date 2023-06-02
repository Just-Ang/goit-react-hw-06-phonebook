import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = e => {
    const inputValue = e.currentTarget.value;
    dispatch(filterContact(inputValue));
    //console.log(inputValue);
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input className={css.input} type="text" onChange={changeFilter} />
    </label>
  );
};

export default Filter;
