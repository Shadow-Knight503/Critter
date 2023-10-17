import './App.css'
import 'bootstrap'
import { 
  BrowserRouter, Routes, Route, useParams, 
} from "react-router-dom";
import Home from './Home';
import Prod from './components/Product';
import Nav from './components/Nav';

function App() {  
  return (
    <BrowserRouter>
      <Nav />
      <br /><br />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='products/:pid/:tle?' element={<Prod />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
