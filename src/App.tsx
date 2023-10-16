import './App.css'
import 'bootstrap'
import { 
  BrowserRouter, Routes, Route, 
} from "react-router-dom";
import Home from './Home';
import Nav from './components/Nav';

function App() {  

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
