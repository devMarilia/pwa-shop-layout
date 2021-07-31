import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';




const App = () => {
  return (
    <>
    <GlobalStyles />
    <Typography />
     <Router>
       <Navbar/>
     </Router>
    </>
     
  )
}

export default App
