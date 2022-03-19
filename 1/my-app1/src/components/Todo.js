import React, { Component } from 'react'
import Todoform from './Todoform'
import Todolist from './Todolist'
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoArrowUndoCircleOutline } from "react-icons/io5";
import style from './style.module.scss';
export default class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      done: []

    }
  }

  //-----------
  addTodo = (todo) => {
    this.setState({
      list: [...this.state.list, todo]
    })
  }
  //----------
  removeTodo = (todo) => {
    let listAfterDelete = this.state.list.filter(l => l !== todo);
    this.setState({ list: listAfterDelete })
  }
  //-----------
  doneTodo = (todo) => {
    this.setState({ done: [todo, ...this.state.done] })
  }
  //-----------
  undoItem = (todo) => {
    let listAfterUndo = this.state.done.filter(l => l !== todo);
    this.setState({
      done: listAfterUndo,
      list: [...this.state.list, todo]
    })
  }

  //------------
  setUpdate = (updatedTitle, targetInput) => {
    this.setState({
      list: this.state.list.map(todo => {
        if (todo.ban.id === targetInput) {
          todo.ban.text = updatedTitle

        }
        return todo

      }),
    })
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
  //----------
  render() {
    return (
      <Container >
        <Row>
          <Col>
            <Todoform
              submithandler={this.addTodo}
            />
            <Todolist
              data={this.state.list}
              removingTodo={this.removeTodo}
              doneTodo={this.doneTodo}
              setUpdate={this.setUpdate}
            />
            <div
              className='bg-dark text-white p-2'>
              <h3 className='text-center'>Done items:</h3>
              <ul >
                {this.state.done.map((item, i) => {
                  return (
                    <li key={item.ban.id}
                      className={style.doneHolder}
                    >
                      <Button
                        key={this.randomId()}
                        className="bg-success border-success"
                        onClick={() => this.undoItem(item)}
                      >
                        <IoArrowUndoCircleOutline
                          key={this.randomId()}
                          className="fs-4 mx-auto" />
                      </Button>
                      <span
                        key={this.randomId()}
                        className="p-2 w-6 bd-highlight fs-5 ">
                        {item.ban.text}
                      </span>

                      <span
                        key={this.randomId()}
                        className="text-success float-end fs-2 px-4">{i + 1}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
