
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import OrderSummary from './components/OrderSummary';

function App() {
  return (
    <Fragment>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='order-summary' element={<OrderSummary/>}/>
      <Route path='*' element={<NoMatch/>}/>
    </Routes>
    </Fragment>
  );
}

export default App;
