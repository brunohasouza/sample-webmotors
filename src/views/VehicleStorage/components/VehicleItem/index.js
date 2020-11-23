import React from  'react'

import Card from './../../../../components/ui-elements/Card'

import './style.css'

const DUMMY_LINK = 'https://www.webmotors.com.br/comprar/land-rover/freelander-2/3-2-se-6v-24v-gasolina-4p-automatico/4-portas/2008/32803858?pos=a32803858c:&np=1'

const VehicleItem = (props) => {
  const {
    Image,
    Make,
    Model,
    Version,
    YearFab,
    YearModel,
    Color,
    KM,
    Price
  } = props

  return (
    <Card>
      <div className="vehicleItem">
        <a 
          href={DUMMY_LINK}
          target="_blank"
          className="vehicleItem__image" 
          style={{ backgroundImage: `url("${Image}")` }}
        >
        </a>
        <div className="vehicleItem__infos">
          <a href={DUMMY_LINK} target="_blank">
            <p className="vehicleItem__infos--title">{`${Make} ${Model}`}</p>
            <p className="vehicleItem__infos--subtitle">{Version}</p>
          </a>
          <div className="vehicleItem__infos--box">
            <div className="vehicleItem__infos--info">
              <p>Ano/Modelo: <strong>{YearFab}/{YearModel}</strong></p>
              <p>Cor: <strong>{Color}</strong></p>
              <p>Quilometragem: <strong>{KM}km</strong></p>
            </div>
            <div className="vehicleItem__infos--price">
              <span>R$</span>
              <span className="price">{Price}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default VehicleItem