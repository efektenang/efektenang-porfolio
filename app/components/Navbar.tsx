'use client'

import { usePathname } from 'next/navigation'
// import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const pathName = usePathname()
  const strPath = pathName.toString()
  const name = strPath.replace('/', '')
  return (
    <div className="flex justify-between px-4 pt-4">
      <h2 className='font-bold capitalize'>{name || 'Home'}</h2>
      <h2>Welcome back, Admin!</h2>
    </div>
  )
}

export default Navbar