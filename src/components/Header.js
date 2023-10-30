import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
 <Navbar className="headercls" >
        <Container>
          <Link to={'/'}>
          <Navbar.Brand href="#home">
            <img
              src="https://i.postimg.cc/vBMnsCRV/vupload.jpg"
              width="60"
              height="60"
              className="headerimgcls"
              
            />
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>


    </div>
  )
}

export default Header