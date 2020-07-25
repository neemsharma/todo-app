import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Tile from '../../modules/Tile';
import Sidebar from '../../modules/Sidebar';
class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main-content">
          <Container>
            <Row>
              <Col md={2}>
                <Sidebar />
              </Col>
              <Col md={10}>
                <Tile />
                <Tile />
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
