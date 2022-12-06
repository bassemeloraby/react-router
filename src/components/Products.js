import React, { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <Fragment>
      {' '}
      <div>
        <input type="search" placeholder="search for a product" />
      </div>
      <nav>
        <Link to="fetured">Fetured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet/>
    </Fragment>
  );
};

export default Products;
