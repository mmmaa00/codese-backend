import React from 'react';
import API from '../api'
import { Button, Container, Table } from "react-bootstrap";
class Class extends React.Component {
  constructor(props) {
    super(props); // props state
    this.state = {
      listStudent: [],
      message: ''
    };
  }

  async hamRenderStudent() {
      const {match: {params}} = this.props
    const res = await API.class_a.getById(params.id)
    if(res.status) {
      this.setState({
        listStudent: res.data
      })
    }
    else {
      this.setState({
        message: res.message
      })
    }
    
  };

  render() {
    return (
      <Container>
        <h1>List Student</h1>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Class-Name</th>
            </tr>
          </thead>
          <tbody>
              {this.state.listStudent.map(item => {
                <Button
                  onClick={() => {
                    this.props.history.push('/student/${item.id}')
                  }}
                >{item.fullName}</Button>
              })}
          </tbody>
        </Table>
      </Container>
    );
  }
}
export default Class;
