import './App.css'
import 'bootstrap'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
// import Prod from './components/Product';
import Nav from './components/Nav';
import Auth from './components/Auth';

function App() {  
  return (
    <BrowserRouter>
      <Nav />
      <br /><br />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/test' element={<Home />}></Route>
        <Route path='/login' element={<Auth />}></Route>
        {/* <Route path='products/:pid' element={<Prod />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
