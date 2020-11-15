import React from 'react';
import API from '../api'
import { Button, Container, Table } from "react-bootstrap";
class HomeScreen extends React.Component {
  constructor(props) {
    super(props); // props state
    this.state = {
      listClass: [],
      message: ''
    };
  }

  async hamRenderClass() {
    const res = await API.class_a.getAll()
    if(res.status) {
      this.setState({
        listClass: res.data
      })
    }
    else {
      this.setState({
        message: res.message
      })
    }
    
  };

  render() {
    const {history} = this.props.history
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
              {this.state.listClass.map(item => {
                <Button
                  onClick={() => {
                    history.push('/class/${item.id}')
                  }}
                >{item.className}</Button>
              })}
          </tbody>
        </Table>
      </Container>
    );
  }
}
export default HomeScreen;
