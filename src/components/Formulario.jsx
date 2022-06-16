// Hooks
import useSelectCoins from '../hooks/useSelectCoins';

// Dependencias
import styled from '@emotion/styled'

const InputSubmit = styled.input`
  font-family: 'Lato', sans-serif;
  background-color: transparent;
  border: solid 1px #4b49e6;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
    background-color: #4b49e6;
    text-shadow: 1px 1px 6px #fff;
    transition: all 0.2s ease;
  }
`;

const Formulario = () => {

  const [ SelectCoins ] = useSelectCoins();
  SelectCoins()
  return (
    <form>
      <InputSubmit
        type="submit"
        value="Cotizar 🔍"
      />
    </form>
  )
}

export default Formulario
