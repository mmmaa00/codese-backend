import React from 'react';
import API from '../api'
import { Button, Container, Table } from "react-bootstrap";
class Student extends React.Component {
  constructor(props) {
    super(props); // props state
    this.state = {
      student: {}
    };
  }

  async hamRenderStudent() {
      const {match: {params}} = this.props
    const res = await API.student_a.getById(params.id)
    if(res.status) {
      this.setState({
        student: res.data
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
        <h1>Student</h1>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Class-Name</th>
            </tr>
          </thead>
          <tbody>
              <th> {this.state.student.fullName} </th>
              <th> {this.state.student.gender} </th>
              <th> {this.state.student.age} </th>
          </tbody>
        </Table>
      </Container>
    );
  }
}
export default Student;
