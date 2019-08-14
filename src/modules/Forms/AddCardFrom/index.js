import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AddCardForm extends React.Component {
    state = {
        formData: {
            title: "",
            description:"",
          },
        cards : [{
            title:"title",
            description:"test",
        }]
    }
    handleSubmit = params => {
        params.preventDefault();
        console.log(params);
        const {cards} = this.state;
        //cards.push(this.state.formData);
        cards.push(params);
        console.log(this.state.cards);
     };
    handleChange=(key, value)=> {
        const {formData} = this.state;
        formData[[key]] = value;
        this.setState({
            formData
        })
    }

    render() {  
        const { formData, cards } = this.state;
       return <>
             <Form onSubmit={this.handleSubmit} >
                <Form.Group  controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                     type="text" 
                     name="title"
                     value={formData.title}
                     onChange = { e => this.handleChange("title", e.target.value) }
                     placeholder="Enter Title" />
                    <Form.Text className="text-muted">
                        Please keep it brief.
                     </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange = { e => this.handleChange("description", e.target.value) }
                    placeholder="Enter Description" />
                </Form.Group>
                <Button variant="secondary" onClick={()=>this.props.hideModal()}>
                 Close
                </Button>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </>
    }
}

export default AddCardForm;

