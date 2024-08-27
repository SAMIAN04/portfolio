import React from 'react'

// eslint-disable-next-line react/prop-types
function Section({children}) {
  return (
      <div className='bg-main min-h-[400px] max-h-[1080px]  min-w-[360px] max-w-[1910] w-[93vw] rounded-2xl border-[1px] border-[#383838] mb-[70px] flex justify-center items-center'>{ children}</div>
  )
}

export default Section