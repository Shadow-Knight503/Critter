import './App.css'
import 'bootstrap'
import { 
  BrowserRouter, Routes, Route, 
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
        <Route path='/Test' element={<Home />}></Route>
        <Route path='products/:pid' element={<Prod />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
