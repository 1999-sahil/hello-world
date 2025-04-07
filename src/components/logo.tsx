import { Link } from 'react-router-dom'

import { BsTriangleFill } from 'react-icons/bs'
import { FaSquare } from 'react-icons/fa'
import { FaCircle } from 'react-icons/fa6'

function Logo() {
  return (
    <Link to='/' className='flex gap-1 md:text-lg text-[#111] hover:text-black dark:text-neutral-200 dark:hover:text-white hover:animate-none'>
      <BsTriangleFill />
      <FaSquare className='animate-bounce hover:animate-none' />
      <FaCircle />
    </Link>
  )
}

export default Logo