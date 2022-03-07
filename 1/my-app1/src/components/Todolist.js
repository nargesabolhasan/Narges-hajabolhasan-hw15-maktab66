import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Todolist extends Component {

    render() {
        return (
            <Container>

                    {this.props.data.map((item,i) => {
                        // console.log(item)
                        return (
                            <li key={i}>
                                {item.inputValue}
                            </li>
                        );
                    })}

            </Container>
        );
    }
}

export default Todolist;