import { navLinks } from "@/constant/nav-links"
import { Link } from "react-router-dom"

function NavigationLinks() {
  return (
    <div className='hidden md:flex items-center gap-5'>
      {navLinks.map((link, index) => {
        return (
          <Link to={link.href} key={index} className='text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white'>
            <h2 className='text-sm font-poppins font-medium'>
              {link.title}
            </h2>
          </Link>
        )
      })}
    </div>
  )
}

export default NavigationLinks