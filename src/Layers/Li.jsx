import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({className, value}) => {
  return (
    <li>
        <Link className={`text-sm font-bold text-[#767676] transition-all duration-300 hover:text-[#262626] ${className}`}>
            {value}
        </Link>
    </li>
  )
}

export default Li