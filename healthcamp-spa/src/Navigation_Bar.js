import React, { Component } from "react";
import { Link } from "react-router-dom";
import Demographics from "./Demographics";
import Health_Vitals from "./Health_Vitals";
import Reports from "./Reports"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

export const Navigation_Bar = () => (
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="/">Health Camp SPA</Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link><Link to="/">Demographics</Link></Nav.Link>
        <Nav.Link><Link to="/Health_Vitals">Health Vitals</Link></Nav.Link>
        <Nav.Link><Link to="/Reports">Reports</Link></Nav.Link>
    </Nav>
    </Navbar>
)

export default Navigation_Bar; 