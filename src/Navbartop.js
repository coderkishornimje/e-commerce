import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useSelector} from 'react-redux';
export default function Navbartop() {
  const {count}=useSelector(state=>state.custom);
  return (
    <div className='nav-container'>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav className="me-auto">
              <h2 style={{color:"white"}}>Online Shoping site</h2>
            </Nav>
            <Nav className="me-auto">
            
            <span class="material-symbols-outlined shop-cart">shopping_cart</span>
            <span id="cart-count">{count}</span>
            </Nav>
        </Container>
      </Navbar>
      </div>
  )
}

 