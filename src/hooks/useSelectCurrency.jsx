/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  outline: none;
  border: 3px solid;
  font-family: 'Lato', sans-serif;

  &:focus {
    border-color: #9497ff;
  }
`;

export const useSelectCurrency = (label, options) => {
  const [state, setState] = useState('');

  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={e => setState(e.target.value)}>
        <option value="">Seleccione un valor</option>

        {options.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </Select>
    </>
  );

  return [SelectCurrency, state];
};
