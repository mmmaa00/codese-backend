import React, { Component } from 'react';
import axios from 'axios';
import Dashboard from './Views/Dashboard'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Avatar } from '@material-ui/core';

export default class Class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        username: '',
        password: '',
        isLogin: false,
        isLoginFailed: false,
        isLoading: false
      }
    }
    login() {
      this.callAuthAPI(this.state.username, this.state.password)
    }
    callAuthAPI(username, password) {
      let body = {
        username: username,
        password: password
      }
      let url = 'https://8e6484f74e30.ngrok.io/login'
      let config = {
        method: 'POST',
        url: url,
        data: body
      };
      this.setState({isLoading: true})
      axios(config)
        .then((res) => {
          console.log('response: ', (res.data)); //status: true/false
          if(res.data?.status){
            this.setState({isLogin: true})
          }
          else {
            this.setState({isLoginFailed: false})
          }
          this.setState({isLoading: false})
        })
        .catch((err) => {
          console.log('error: ', err);
        })
    }
    render(){
      if(this.state.isLogin){
        return(
          <Dashboard username = {this.state.username}></Dashboard>
        )
      } else if(this.state.isLoading) {
        return(
          <div> Loading... </div>
        )
      } else {
        return (
          <Container component = "main" maxWidth = "xs">
            <div style = {{
              marginTop: 100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <Avatar style = {{
                margin: 10,
                backgroundColor: "Background",  
              }}
              ></Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form style = {{
                 width: '100%', // Fix IE 11 issue.
                 marginTop: 15,
              }}>
                <Grid container spacing={0}>
                <Grid item xs={12}>
                <TextField
                  variant = "outlined"
                  margin = "normal"
                  required
                  fullWidth
                  label = {'Username'}
                  value = {this.state.username}
                  onChange = {(e) => {
                    this.setState({
                      username: e.target.value
                    })
                  }}
                ></TextField>
                </Grid>
                <Grid item xs = {12}>
                  <TextField
                  variant = "outlined"
                  margin = "normal"
                  required
                  fullWidth
                  label = {'Password'}
                  value = {this.state.password}
                  onChange = {(e) => {
                    this.setState({
                      password: e.target.value
                    })
                  }}
                  ></TextField>
                </Grid>
                </Grid>
                <Grid item xs = {12}>
                  <Button 
                    margin = "3,0,2"
                    type = "submit"
                    fullWidth
                    variant = "contained"
                    color = "primary"
                    onClick = {() => this.login()}>
                      Login
                  </Button>
                  {this.state.isLoginFailed
                    ? 
                    <div> Incorrect username or password </div>
                    :null
                  }
                </Grid>
              </form>
            </div>

          </Container>
        );
    }
  }
}

// //Ex: form login: username, password
// //username, password = admin => chuyển tới Dashboard ...
// //sai => popup sai tkhoan và mk, đăng nhập lại
// //note: ko dùng router


