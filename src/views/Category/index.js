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

class Category extends React.Component{
  constructor(props) {
      super(props)
      this.state = {
        listCategory: [],
        total: 0,
        page: 1,
        size: 8
      }
  }
  async fetchData() {
    const res = await api.category.getAllCategory({
      page: this.state.page,
      size: this.state.size
    })
    if(res.status){
      this.setState({
        listCategory: res.data.data,
        total: res.data.metadata.total
      })
    } else {
      console.log(res.message);
    }
  }
  async componentDidMount() {
    await this.fetchData();
  }
  hamRenderCategory = (category) => {
    return <Card>
      <CardHeader title = {category["display"]} style = {{backgroundColor: '#FFEB3B'}}/> 
      <Divider></Divider>
      <CardContent>
        <Typography>{category.description}</Typography>
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
export default Category
