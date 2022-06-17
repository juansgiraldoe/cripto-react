// Hooks
import { useState } from 'react';
// 
import styled from '@emotion/styled'

const Label = styled.label`
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  display: block;
  font-weight: 700;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  font-family: 'Lato', sans-serif;
  border-radius: 5px;
  padding: 10px;
  color: #777373;
  margin: 30px 0;
`;

const useSelectCoins = (label, divisa) => {

  const [state, setState] = useState('')
  
  const SelectCoins = ()=> (
    
    <>
        <Label>{label}</Label>
        <Select
          id=""
          value={state}
          onChange={ e => setState(e.target.value)}
        >
          <option value="">-- Seleccione --</option>
          {divisa.map( divisa => (
            <option
              key={divisa.id}
              value={divisa.id}
            >{divisa.nombre}</option>
          ))}
        </Select>
    </>

  )

  return [ state, SelectCoins ]
}

export default useSelectCoins