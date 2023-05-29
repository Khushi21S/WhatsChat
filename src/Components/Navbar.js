import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, Navigate
  } from "react-router-dom";
  import Home from '../pages/Home';
  import Usecase from '../pages/Usecase';
  import Payment from '../pages/Payment';
  import '../Style/Navbar.css'


function Navbar1() {
  return (
    <Router>
        <div className='navbar2'>
            <Navbar  variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Brand href="#home">WhatsChat</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/Home"} href="#home">Home</Nav.Link>
                            <Nav.Link as={Link} to={"/Usecase"} href="#usecase">Usecase</Nav.Link>
                            <Nav.Link as={Link} to={"/Payment"} href="#payment">Payments</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    <div>
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route exact path="/Home" element={<Home/>}/>
            <Route exact path="/Usecase" element={<Usecase/>}/>
            <Route exact path="/Payment" element={<Payment/>}/>
        </Routes>
    </div>
    </Router>
  );
}

export default Navbar1;
