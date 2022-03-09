import React, { Component } from 'react'
import Todoform from './Todoform'
import Todolist from './Todolist'
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  setUpdate = (updatedTitle) => {
    this.setState({
      list: this.state.list.map(todo => {
        // if (todo.id === id) {
          todo.inputValue = updatedTitle
          console.log(todo.id)
        //}
        return todo
      }),
    })
  }
  componentDidUpdate(){

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
      <div>
        <Container>
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
              // id={this.randomId}
              />
              <div>
                <ul>
                  {this.state.done.map((item, i) => {
                    return (
                      <li key={i}>
                        {item.inputValue}
                        <Button
                          onClick={() => this.undoItem(item)}
                        > Undo
                        </Button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
