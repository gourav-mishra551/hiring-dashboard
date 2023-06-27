import Home from './Pages/Home/Home';
import Login from './Pages/login/login';
import Candidate from './Pages/Candidate/Candidate';

import { Route , Routes } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path= '/login' element={<Login />}/>
      <Route path= '/candidates' element={<Candidate />}/>
    </Routes>
  </>
  )
}

export default App
