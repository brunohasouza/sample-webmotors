import React from 'react'

import VehicleItem from './../VehicleItem'

import './style.css'

const VehicleList = ({ vehicleList }) => {
  return (
    <div className="vehicleList">
      {
        vehicleList.map(vehicle => {
          return (
            <div className="vehicleList__item" key={vehicle.ID}>
              <VehicleItem { ...vehicle }/>
            </div>
          )
        })
      }
    </div>
  )
}

export default VehicleList