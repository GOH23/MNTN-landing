"use client"
import { motion } from 'framer-motion'

import { Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (<Navbar sticky='top'  expand={'md'}>
        <Navbar.Brand className='color-2 fw-bold' href="#home">MNTN</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
            
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
            <Nav className="justify-content-center mx-auto">

                <Nav.Item >
                    <Nav.Link className='color-2' href="/home">Equipment</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='color-2' href="/home">About us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='color-2' href="/home">Blog</Nav.Link>
                </Nav.Item>

            </Nav>
            <Nav>
                <Nav.Item className="justify-content-end">
                    <Nav.Link className='color-2' href="/home">Account</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>)
}
export { Header }