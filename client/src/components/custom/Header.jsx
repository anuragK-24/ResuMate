import React from 'react'
import {Button} from '../ui/button'

export default function Header() {
  return (
    <div className='flex justify-evenly p-5 py-5 shadow-xl'>
      <img src="./logo.svg" alt="" height={30} width={30} />
      <Button>Get Started</Button>
    </div>
  )
}
