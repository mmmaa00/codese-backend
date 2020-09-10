import React, {version} from 'react'; //ES5
import HomePage from './views/HomePage';
import SignIn from './views/SignIn'
import NotFound from './views/NotFound'
import Category from './views/Category'
import {
  Paper, 
  Typography,
  Button
}
from '@material-ui/core'
import {
  Switch,
  Route,
  BrowserRouter,
  Link
} 
from 'react-router-dom'
function App(props) {
  return <BrowserRouter>
    <div style = {{
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'stretch',
        flex: 1
    }}>
      <Paper style = {{padding: 24, display: 'flex', flexDirection: 'column'}}>
        <Link to ="/"> 
          <Button>Trang chủ</Button>
        </Link>
        <Link to ="/sign-in"> 
          <Button>Đăng nhập</Button>
        </Link>
      </Paper>
      <Switch>
        <Route 
          component = {HomePage}
          exact path = "/"
        />
        <Route
          component = {SignIn}
          exact path = "/sign-in"
        />
        <Route
          component = {NotFound}
          path = "/"
        />
        <Route
          component = {Category}
          path = "/category"
        />
      </Switch>
    </div>
  </BrowserRouter>
}


 export default App;