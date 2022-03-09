import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.scss';

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

    //----------
    render() {
        return (
            <Form>
                {this.props.data.map((item, i) => {
                    return (
                        <li
                            className="d-flex justify-content-between"
                            key={i}
                        >
                            <Button key={i} onDoubleClick={this.handleEditing}>edit</Button>
                            <Form.Control
                                disabled={true}
                                id={ item.id}
                                className="edit"
                                type="text"
                                value={item.inputValue}
                                onChange={(e) => {
                                    this.props.setUpdate(e.target.value, e.target.id)
                                    console.log(e.target.id)

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