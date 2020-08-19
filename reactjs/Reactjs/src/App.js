import React, { Component } from 'react';
import { BrowserRouter as Router , Route , Switch} from "react-router-dom"; 
import Routes from './components/route';
import axios from 'axios';

class App extends Component {
  loadRoute(){
    var reusult=Routes.map((route,id)=>{
      return <Route
        id={id}
        exact={route.exact}
        path={route.path}
        component={route.main}
        params={route.params}
      ></Route>
    })
    return reusult;
  }
  componentDidMount(){
    axios({
      method : "GET",
      url : "http://127.0.0.1:8000/api/products",
      data : null
    }).then(res=>{
      console.log(res.data);
    })
  }
  render() {
    return (
      <div>
        <Router>
          {/* <Head />
          <Slider /> */}
          <Switch>
            {this.loadRoute()}
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
