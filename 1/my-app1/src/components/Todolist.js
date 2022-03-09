import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Todolist extends Component {

    //--------------
    removeItem = (currentTtem) => {
        this.props.removingTodo(currentTtem);
    };
    //--------------
    doneItem = (currentTtem) => {
        this.props.doneTodo(currentTtem);
        this.props.removingTodo(currentTtem);
    };
    //--------
    handleEditing = event => {
        event.target.nextSibling.disabled = false;
    }
    //---------
    handleUpdatedDone = event => {
        if (event.key === "Enter") {
            event.target.disabled = true;
        }
    }
    //----------
    randomId = (() => {
        const uint32 = window.crypto.getRandomValues(new Uint32Array(1))[0];
        return uint32.toString(16);
    })
    //----------
    componentDidMount() {
        this.randomId()
    }
    //----------
    render() {
        return (
            <Form>
                {this.props.data.map((item, i) => {
                    return (
                        <li key={i} id={`${this.randomId}`} >
                            <Button key={i} onDoubleClick={this.handleEditing}>edit</Button>
                            <Form.Control
                                disabled={true}
                                className="edit"
                                type="text"
                                value={item.inputValue}
                                onChange={(e) => {
                                    this.props.setUpdate(e.target.value)
                                    
                                }}
                                onKeyDown={this.handleUpdatedDone}
                            />
                            <Button
                                onClick={() => this.removeItem(item)}
                            >Remove</Button>
                            <Button
                                onClick={() => this.doneItem(item)}
                            >Done</Button>
                        </li>
                    );
                })}

            </Form>
        );
    }
}

export default Todolist;