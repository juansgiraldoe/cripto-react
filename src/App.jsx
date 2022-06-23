// Hooks
import { useState, useEffect } from 'react'
// Componentes
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
// Dependencias
import styled from '@emotion/styled'
// Multimedia
import imagenCripto from './img/imagen-criptos.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #498df3;
    display: block;
  margin: 15px auto 0 auto;
  }
`;

function App() {

  const [ monedas, setMonedas ] = useState({})
  const [resultado, setResultado] = useState({})
  const [ cargando, setCargando] = useState(false)

  useEffect(() => {
    if (Object.keys(monedas).length>0) {
      const cotizarCripto = async ()=> {
        setCargando(true)
        setResultado({})
        const { divisa, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${divisa}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResultado(resultado.DISPLAY[criptomoneda][divisa])
        setCargando(false)
      }
      cotizarCripto()
    }
  }, [monedas]);

  return (
    <Contenedor>
      <Imagen
        src={imagenCripto}
        alt='Imagen de criptomonedas'
      />
      <section>
        <Heading>Cotiza tus Criptomonedas.</Heading>
        <Formulario
          setMonedas={setMonedas}
        />
        {cargando && <Spinner/>}
        {resultado.PRICE && <Resultado resultado={resultado}/> }
      </section>
    </Contenedor>
  )
}

export default App
