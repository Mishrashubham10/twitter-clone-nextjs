import React from 'react'
import Image from './Image'

export default function Search() {
  return (
    <div className='bg-inputGray py-3 px-4 flex items-center gap-4 rounded-full'>
        <Image path='icons/explore.svg' alt='serach' w={16} h={16} />
        <input type="text" placeholder='Search' className='bg-transparent placeholder:text-textGray outline-none' />
    </div>
  )
}
