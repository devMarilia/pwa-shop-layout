import React from 'react'
import history from "../src/Services/history";
import { BrowserRouter as Router } from "react-router-dom";

import MainRoutes from './routes';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';




function App() {
  return (
    <>
   
      <Router history={history}>
        <GlobalStyles/>
        <Typography/> 
        <MainRoutes />
      </Router>

      </>
  )
}

export default App
