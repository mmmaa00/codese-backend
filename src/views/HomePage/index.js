import React from 'react'; //ES5
// import axios from 'axios';
import api from '../../api'
import notistack from 'notistack'
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
  async fetchData() {
    const res = await api.product.getAllProduct({
      page: this.state.page,
      size: this.state.size
    })
    if(res.status){
      this.setState({
        listProduct: res.data.data,
        total: res.data.metadata.total
      })
    } else {
      console.log(res.message);
    }
  }
  async componentDidMount() {
    await this.fetchData();
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
  prevPage = async () => {
    if(this.state.page > 1) {
       await this.setState({
        page: this.state.page - 1
      })
      await this.fetchData()
    }
  }
  nextPage = async () => {
    if(this.state.page < (Math.ceil(this.state.total/this.state.size))) {
        await this.setState({
          page: this.state.page + 1
        })
        await this.fetchData()
    }
  }
  render() {
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
export default HomePage
