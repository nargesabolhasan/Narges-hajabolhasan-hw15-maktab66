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
    console.log(todo)
  }
  //----------
  removeTodo = (todo) => {
    let listAfterDelete = this.state.list.filter(l => l !== todo);
    this.setState({ list: listAfterDelete })
    console.log(todo)
  }
  //-----------
  doneTodo = (todo) => {
    this.setState({ done: [todo, ...this.state.done] })
    console.log(todo)
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
  componentDidUpdate() {
  }
  //-----------
  componentWillUnmount() {
    this.removeTodo()
    this.doneTodo()
    this.undoItem()
  }
  //-----------
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
            <div className='bg-secondary p-2'>
              <h3 className='text-center'>Done items:</h3>
              <ul >
                {this.state.done.map((item, i) => {
                  return (
                    <li key={i}
                      className={style.doneHolder}
                    >
                      <span className="mx-auto fs-3 ">
                        {item.ban.text}
                      </span>
                      <Button
                        className="bg-success border-success"
                        onClick={() => this.undoItem(item)}
                      > 
                      <IoArrowUndoCircleOutline className="fs-4 mx-auto"/>
                      </Button>
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
