import React from 'react'

export default function Card(props) {

  const {name,flags,capital,region} = props.country;
  return (
    <div className="col-md-3 mb-4">
        <div className="card">
            <img style={{height:"180px"}} src={flags.png} alt="" className='p-3 card-img-top img-fluid'/>
            <div className="card-body">
            <h5 className="card-title text-center">{name.common}</h5>
            <p className="card-text  m-2">Capital: {capital}</p>
            <p className="card-text m-2">Region: {region}</p>
            </div>
        </div>
    </div>
  )
}
