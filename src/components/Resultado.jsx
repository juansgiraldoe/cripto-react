import styled from "@emotion/styled"

const Resultados = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
`
const Texto = styled.p`
  font-size: 20px;
  span{
    font-weight: 700;
  }
`
const Precio = styled.p`
  font-size: 30px;
  span{
    font-weight: 700;
  }
`

const Imagen = styled.img`
  display: block;
  width: 120px;
`

const Resultado = ({resultado}) => {
  const {PRICE, HIGHDAY, LOWDAY, IMAGEURL, CHANGEPCT24HOUR,LASTUPDATE} = resultado

  return (
      <Resultados>
        <Imagen
          src={`https://www.cryptocompare.com/${IMAGEURL}`}
          alt="imagen cripto"
          />
        <section>
          <Precio>El precio actual es de: <span>{PRICE}</span></Precio>
          <Texto>El precio mas alto hoy: <span>{HIGHDAY}</span></Texto>
          <Texto>El precio mas bajo hoy: <span>{LOWDAY}</span></Texto>
          <Texto>Variacion en ultimas 24 horas:<span>{CHANGEPCT24HOUR}</span></Texto>
          <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
        </section>
      </Resultados>
  )
}

export default Resultado
