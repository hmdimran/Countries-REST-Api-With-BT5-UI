import React from 'react'
import Card from './Card'
import Spanner from './Spanner'
import Error from './Error'
import {v4 as uuidv4} from 'uuid'

export default function Body(props) {
  return (
    <div className="row">
        <Spanner loading={props.loading}/>
        <Error error={props.error}/>
        <>
          {props.countries.map((country)=>{
              const countryNew = {country,id:uuidv4()};
              return <Card {...countryNew} key={countryNew.id}/>
          })}
        </>
        
    </div>
  )
}
