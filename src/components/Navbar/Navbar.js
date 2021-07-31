import React from 'react'
import { Link } from 'react-router-dom'
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
            
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <Link to="/contact">Contact</Link>

            <div className="dropdown">
              <span>Calcinhas</span>
              <div className="dropdown-content">
                <Link to="">Tradicional</Link>
                <Link to="">Fio duplo</Link>
                <Link to="">Renda</Link>
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
