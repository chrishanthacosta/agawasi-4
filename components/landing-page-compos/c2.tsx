import React from 'react'
import { Noto_Sans_Sinhala } from 'next/font/google'

const noto = Noto_Sans_Sinhala({
  weight: '400',
  subsets: ["sinhala"],
   display: 'swap',
})

const C2 = () => {
  return (
    <div className={`${noto.className}  w-full bg-green-400 sm:w-[50%] sm:bg-yellow-400'}`}>
      C2 දුර් දුර්ලබ ලභ දුර්ලබ දු
      
    </div>
  )
}


export default C2