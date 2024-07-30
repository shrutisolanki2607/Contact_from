import React from 'react';
import image from '../images/Frame 2 1.png';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

function Navigation() {
  return (
      <Navbar className='container'>
        <Container>
          <Navbar.Brand>
            <img src ={image}/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav href="#home">Home</Nav>
            <Nav href="#features">About</Nav>
            <Nav href="#pricing">Contact</Nav>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navigation;