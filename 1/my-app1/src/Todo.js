import React, { Component } from 'react'
import Todoform from './Todoform'
import Todolist from './Todolist'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  submitHandler = (contact) => {
    this.setState({
      list: [...this.state.list, contact]
    })
  }


  render() {
    return (
      <div>
        {/* <Todoform addItem-to-list={this.addTodo}/>
        <Todolist listItem={ this.state.list} remove={this.removeTodo }  doneTodo={ this.doneTodo }  addTodo={this.addTodo  } /> */}
        <Container>
          <Row>
            <Col>
              <Todoform submithandler={this.submitHandler} />
              <Todolist data={this.state.list} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
