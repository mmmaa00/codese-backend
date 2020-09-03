import React from 'react'; //ES5
import axios from 'axios';
import {
  TextField,
  Typography,
  Button,
  Paper,
  Card,
  CardHeader,
  CardContent,
  Divider,
  CardActions
 } from '@material-ui/core'

class HomePage extends React.Component{
  constructor(props) {
      super(props)
      this.state = {
        listProduct: [],
        total: 0,
        page: 1,
        size: 8
      }
  }
  async componentDidMount() {
    // const params = {
    //   size: 10,
    //   page: 1
    // }
    const linkApi = 'http://localhost:5000/api/v1/product'
    const res = await axios.get(linkApi, {
      params: {
        page: this.state.page,
        size: this.state.size
      }
    })
    console.log(res.data.data);
    this.setState( {
      listProduct: res.data.data,
      metadata: res.data.metadata,
      total: res.data.metadata.total
    }
    )
  }
  hamRenderProduct = (product) => {
    return <Card>
      <CardHeader title = {product["display"]} style = {{backgroundColor: '#FFEB3B'}}/> 
      <Divider></Divider>
      <CardContent>
        <Typography>{product.description}</Typography>
      </CardContent>
      <Divider></Divider>
      <CardActions>
        <Button> Chi tiết</Button>
      </CardActions>
    </Card>
  }
  prevPage = () => {
    if(this.state.page <= 1) {
      alert('Error!')
    }
    else {
      this.setState((preState) => {
        return {
          ...this.state,
          page: this.state.page - 1
        }
      })
    }
  }
  nextPage = () => {
    if(this.state.page >= (Math.ceil(this.state.total/this.state.size))) {
      alert('Error!')
    }
    else {
      this.setState((nextState) => {
        return {
          ...this.state,
          page: this.state.page + 1
        }
      })
    }
  }
  render(){
    return (
      <div>
          <Typography> Total: {this.state.total}</Typography>
          <Typography> Page: {this.state.page}</Typography>
          <Typography> Size: {this.state.size}</Typography>
          <Typography> Paging: {this.state.page} / {Math.ceil(this.state.total/this.state.size)}</Typography>
          <Button onClick = {this.prevPage}> Pre </Button>
          <Button onClick = {this.nextPage}> Next</Button>
          {this.state.listProduct.map(
            product => this.hamRenderProduct(product)
          )}
      </div>
    )
  }
}
export default HomePage;
