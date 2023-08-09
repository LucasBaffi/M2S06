
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Login from './pages/login/Login';
import Home from  './pages/home/Home'
import Perfil from './pages/perfil/Perfil'

import './App.css'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/perfil" element={<Perfil/>} />
       
          
        </Routes>
      </Router>
    </>
  )
}

export default App
