import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from './NavbarElement'

const Navbar = () => {
    return (
        <Container>
        <div>
          {/* <Image
            src="/assets/logo_dark.svg"
            alt="Go2Go Logo"
            width={126}
            height={45}
          /> */}

               <nav>
            
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Product</NavLink>
            <NavLink to="/contact">Contact</NavLink>

            <div className="dropdown">
              <span>Calcinhas</span>
              <div className="dropdown-content">
                <NavLink to="">Tradicional</NavLink>
                <NavLink to="">Fio duplo</NavLink>
                <NavLink to="">Renda</NavLink>
              </div>
            </div>
          </nav>

          <p className="logo">
              um logo
          </p>
  
     
        </div>
      </Container>
    )
}

export default Navbar
