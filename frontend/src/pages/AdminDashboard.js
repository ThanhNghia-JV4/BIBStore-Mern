import React from 'react';
import axios from '../axios';
import './AdminDashboard.css';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';


 


function AdminDashboard() {
  return 
    <Container>
        <Tab.Container>
            <Row>
                <Col md={3}>
                    <Nav variant='pills' className='flex-columns'>
                        <Nav.Item>
                            <Nav.Link eventKey={products}>Products</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Tab.Container>
    </Container>
  
}

export default AdminDashboard
