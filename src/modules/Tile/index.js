import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default class Tile extends React.Component {
    render() {
        return <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
      </Card.Text>
                <Button variant="primary">Edit Card</Button>
            </Card.Body>
        </Card>
    }

} 