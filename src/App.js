import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Admin from './components/Admin';
import FeturedProducts from './components/FeturedProducts';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NewProducts from './components/NewProducts';
import NoMatch from './components/NoMatch';
import OrderSummary from './components/OrderSummary';
import Products from './components/Products';
import UserDetails from './components/UserDetails';
import Users from './components/Users';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index="fetured" element={<FeturedProducts />} />
          <Route path="fetured" element={<FeturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />} >
        <Route path=":_id" element={<UserDetails />} />
        <Route path="admin" element={<Admin />} />
        </Route>
        
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
