import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoAddCircleOutline } from "react-icons/io5";
import style from './style.module.scss';

export default class Todoform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }
    //-----------
    randomId = (() => {
        const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
        return uint32.toString(16);
    })
    //----------
    componentDidMount() {
        this.randomId()
    }
    //-----------
    formSubmit = (e) => {
        e.preventDefault();
        this.props.submithandler({
            ban: {
                text: this.state.inputValue,
                id: this.randomId()
            }
        });
        this.setState({
            inputValue: ''
        })
    };
    //-----------
    changeHandler = (e) => {
        const value = e.target.value
        this.setState({ inputValue: value })
    };
    //-----------
    render() {
        const { inputValue } = this.state
        return (
            <div className="mb-3 mt-5  bg-dark p-4">
                <h1 className="text-center text-warning">TODO</h1>
                <Form onSubmit={this.formSubmit}>
                    <Form.Group className="d-flex flex-row justify-content-center">
                        <Form.Control
                            className={style.inputstyle}
                            type="text"
                            name="todo"
                            value={inputValue}
                            placeholder="enter something to do..."
                            onChange={this.changeHandler}
                        />
                        <Button
                            className="bg-warning border-warning"
                            type="submit"
                        ><IoAddCircleOutline className="fs-3 mx-auto text-dark"/></Button>
                    </Form.Group>

                </Form>
            </div>
        )
    }
}
