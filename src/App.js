import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import WithTokenNavbar from './components/Home/WithTokenNavBar';
import Register from './components/Register.js/Register';
import NotFound from './components/NotFound/NotFound';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/logup' element={<Register />}></Route>
          <Route exact path='/home/auth' element={<WithTokenNavbar />} ></Route>
          <Route path='/:random' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
