import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='max-[1920px] mx-auto px-5'>{children}</div>
  )
}

export default Container