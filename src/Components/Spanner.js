import React from 'react'

export default function Spanner(props) {
  return (
    <>
      {props.loading &&
        <div className="d-flex justify-content-center w-100 h-100">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
      }
    </>
  )
}
