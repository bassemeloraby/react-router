
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom'
import About from './components/About';
import FeturedProducts from './components/FeturedProducts';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NewProducts from './components/NewProducts';
import NoMatch from './components/NoMatch';
import OrderSummary from './components/OrderSummary';
import Products from './components/Products';

function App() {
  return (
    <Fragment>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='order-summary' element={<OrderSummary/>}/>
      <Route path='products' element={<Products/>}>
      <Route path='fetured' element={<FeturedProducts/>}/>
      <Route path='new' element={<NewProducts/>}/>
      </Route>
      <Route path='*' element={<NoMatch/>}/>
    </Routes>
    </Fragment>
  );
}

export default App;
