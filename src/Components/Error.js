import React from 'react'

export default function Error(props) {
  return (
    <>
        {props.error &&
            <div className='text-center'>
                <p className='bg-danger w-100 text-light'>{props.error}</p>
            </div>
        }
    </>
  )
}
