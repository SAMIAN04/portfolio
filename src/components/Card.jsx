import React from 'react'

// eslint-disable-next-line react/prop-types
function Card({children}) {
  return (
    <div className='bg-grad backdrop-blur-xl min-h-[400px] max-h-[1080px]  min-w-[300px] max-w-[1910] w-[90%] rounded-2xl border-[1px]  flex justify-center items-center'>{ children}</div>
)
}

export default Card