import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../layout/Header'; 
import Footer from '../../layout/Footer'; 


class Home extends React.Component{
    render(){
        return <>
       <Header/>
       <main className="main-content">
        <Container>
                <Row>
                <Col md={4}>sidebar</Col>
                <Col md={8}>content</Col>
                </Row>
        </Container>
      </main>
      <Footer/>
        </> 
    }
}

export default Home;