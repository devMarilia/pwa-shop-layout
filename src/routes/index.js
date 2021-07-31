import React from 'react'
import { BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar'


import Home from '../page/Home/Home'
import About from '../page/About/About'
import Products from '../page/Products/Products'
import "../styles/GlobalStyles"


// import Error from '../page/Error'





function MainRoutes() {
  const location = useLocation();
    return (
      <>
      
        
        <Router location={location}>
        <Navbar />
        <Switch >
          <Route path="/" exact component={Home}><Home/></Route>
          <Route path="/about" exact component={About}><About/></Route>
          <Route path="/products" exact component={Products}><Products/></Route>
        </Switch>
          </Router>
        
      </>
    );
  }
  
  export default MainRoutes;