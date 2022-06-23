// Hooks
import useSelectCoins from '../hooks/useSelectCoins';
import { useEffect, useState } from 'react';

// Dependencias
import styled from '@emotion/styled'
import { divisas } from '../data/divisas'

// Components
import Error from './Error';

const Seccion = styled.section`
  border: solid 1px #b4b4b4;
  padding: 20px;
  border-radius: 10px;
`;

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
  border-radius: 5px;
  cursor: pointer;
  &:hover{
    background-color: #4b49e6;
    text-shadow: 1px 1px 6px #fff;
    transition: all 0.2s ease;
  }
`;

const Formulario = ({setMonedas}) => {

  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)

  const [ divisa, SelectCoins ] = useSelectCoins('💵 | Elige tu Divisa', divisas);
  const [ criptomoneda ,SelectCriptomoneda ] = useSelectCoins('🪙 | Elige tu Criptomoneda', criptos);
  
  useEffect(() => {
    const consularAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      
      const arrayCriptos = resultado.Data.map( cripto => {

        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }
        return objeto
      })
      setCriptos(arrayCriptos)

    }
    consularAPI();
  }, []);

  const handleSubmit = e => {
    e.preventDefault()
    if ([divisa, criptomoneda].includes('')){
      setError(true)
      return
    }
    setError(false)
    setMonedas({
      divisa,
      criptomoneda
    })
  }
  
  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form
        onSubmit={handleSubmit}
      >
        <Seccion>
          <SelectCoins/>
          <SelectCriptomoneda/>
        

          <InputSubmit
            type="submit"
            value="Cotizar 🔍"
          />
        </Seccion>  
      </form>
    </>
  )
}

export default Formulario
