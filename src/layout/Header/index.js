import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Header extends React.Component {
    render() {
        return <>
            <header>
                <Container fluid={true}>
                    <Row>
                        <Col md={3}>logo</Col>
                        <Col md={9} >navbar</Col>
                    </Row>
                </Container>
            </header>
        </>
    }
}
export default Header;