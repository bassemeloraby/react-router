
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <Fragment>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </Fragment>
  );
}

export default App;
