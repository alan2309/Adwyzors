import React from 'react'

const HomeContainer = (props) => {
  return (
    <div className='bg-white rounded-3 shadow-sm'>
      {props.children}
    </div>
  )
}

export default HomeContainer