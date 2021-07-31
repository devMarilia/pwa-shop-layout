import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'
import Contact from '../pages/Contact'



function Routers() {
    return (
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/product' component={Product}/>
      <Route exact path='/contact' component={Contact}/>
      <Route path="/*" component={Error} />
     </Switch>
     </BrowserRouter>
    );
  }
  
  export default Routers;