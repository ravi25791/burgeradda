import React, {useState} from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../../assets/style/header.css';
import logo from '../../assets/logo/logo-small-retina.png'
import { Link } from 'react-router-dom';

const Header = () => {

  const [nav, setNav] = useState(false);

  const changeValueOnScroll = () =>{
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 10 ? setNav(true) : setNav(false);
  }

  window.addEventListener('scroll', changeValueOnScroll)

  return (
    <header>
      <Navbar expand="lg" className={`${nav === true ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand  href="#home">
            <Link to="/" className='logo'><img src={logo} alt="" /></Link>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              <Nav.Link as={Link} to='/menu'>our menu</Nav.Link>
              <Nav.Link as={Link} to='/shop'>shop</Nav.Link>
              <Nav.Link as={Link} to='/blog'>blog</Nav.Link>
              <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
              <Nav.Link as={Link} to='/'>
                <div className='cart'>
                  <i className="bi bi-bag fs-5"></i>
                  <em className='round-point'>2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default Header

