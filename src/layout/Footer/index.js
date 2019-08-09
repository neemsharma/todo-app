import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends React.Component {
    render() {
        return <>
            <footer>
                <Container>
                    <Row>
                        <Col md={12} >Footer</Col>
                    </Row>
                </Container>
            </footer>
        </>
    }
}

export default Footer;