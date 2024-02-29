import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Services() {
  return (
    <div>
            <Link to="services1"> service 1 </Link>
            <Link to="services2"> service 2 </Link>
            <Link to="services3"> service 3 </Link>
            <Link to="services4"> service 4 </Link>
            <Outlet/>
    </div>
  )
}

export default Services
