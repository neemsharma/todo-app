import React from 'react';
import Nav from 'react-bootstrap/Nav';
class Navbar extends React.Component {
    render() {
        return <>
            <Nav className="custom-navbar" variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/about">About us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                   </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    }
} 

export default Navbar;