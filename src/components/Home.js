import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div>Home page</div>
      <button onClick={() => navigate('order-summary', { replace: true })}>
        place order
      </button>
    </Fragment>
  );
};

export default Home;
