import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default class Todoform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }
    formSubmit = (e) => {
        e.preventDefault();
        this.props.submithandler(this.state);
        this.setState({
            inputValue: ''
        })
    };
    changeHandler = (e) => {
        const value = e.target.value
        this.setState({ inputValue: value })
        console.log(value)
    };
    //-----------

    render() {
        const { inputValue } = this.state;
        return (
            <div >
                <Form onSubmit={this.formSubmit}>
                    <Form.Group controlId="name-input">
                        <Form.Label>TODO</Form.Label>
                        <Form.Control
                            type="text"
                            name="todo"
                            value={inputValue}
                            placeholder="enter something to do..."
                            onChange={this.changeHandler}
                            
                        />
                    </Form.Group>
                    <Button type="submit">Add</Button>
                </Form>
            </div>
        )
    }
}
