import React from 'react'
import Search from './Search'
import Body from './Body'

export default function Main(props) {
  return (
    <>
        <main>
            <div className="container">
                <Search onSearch={props.onSearch}/>
                <Body loading={props.loading} error={props.error} countries={props.countries} />
            </div>
        </main>
    </>
    )
}
