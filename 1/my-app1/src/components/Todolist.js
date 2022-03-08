import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Todolist extends Component {
    //--------------
    removeItem(currentTtem) {
        this.props.removingTodo(currentTtem);
    };
    //--------------
    doneItem(currentTtem) {
        this.props.doneTodo(currentTtem);
        this.props.removingTodo(currentTtem);
    };
    render() {
        return (
            <Form>

                {this.props.data.map((item, i) => {
                    return (
                        <li key={i}>
                            <Form.Control
                                type="text"
                                value={item.inputValue} />
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