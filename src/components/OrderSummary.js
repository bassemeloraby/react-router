import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div>Order Confirmed!</div>
      <button onClick={() => navigate(-1)}>go back</button>
    </Fragment>
  );
};

export default OrderSummary;
