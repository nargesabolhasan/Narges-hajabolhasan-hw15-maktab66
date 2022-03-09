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
                        <div ClassName={style.back}>
                            <li
                                className="d-flex justify-content-between mb-4"
                                key={i}>
                                <Button
                                    className="bg-warning border-warning text-dark"
                                    onClick={this.handleEditing}>edit</Button>
                                <Form.Control
                                    className={style.inputstyle}
                                    disabled={true}
                                    id={item.ban.id}
                                    type="text"
                                    value={item.ban.text}
                                    onChange={(e) => {
                                        this.props.setUpdate(e.target.value, e.target.id)
                                        console.log(item.ban.text, item.ban.id)

                                    }}
                                    onKeyDown={this.handleUpdatedDone}
                                />
                                <Button
                                    className="bg-danger border-danger text-white mx-2"
                                    onClick={() => this.removeItem(item)}
                                >Remove</Button>
                                <Button
                                    className="bg-success border-success text-white"
                                    onClick={() => this.doneItem(item)}
                                >Done</Button>
                            </li>
                        </div>
                    );
                })}

            </Form>
        );
    }
}

export default Todolist;