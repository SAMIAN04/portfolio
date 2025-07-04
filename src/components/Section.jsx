import {} from 'react'

// eslint-disable-next-line react/prop-types
function Section({children}) {
  return (
      <div className='bg-[#1e1f1f] min-h-[540px] max-h-[1080px] pt-3 min-w-[360px] max-w-[1210px]  rounded-2xl border-[1px] border-[#2e3830] w-[70vw]  flex justify-center text-ellipsis whitespace-normal backdrop:blur-2xl lg:h-[800px] self-center '>{ children}</div>
  )
}

export default Section