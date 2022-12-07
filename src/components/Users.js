import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'active';
  return (
    <div>
      <h2>user 1</h2>
      <h2>user 2</h2>
      <h2>user 3</h2>
      <Outlet />
      <div>
        <button onClick={()=>setSearchParams({filter : 'active'})}>Active users</button>
        <button onClick={()=>setSearchParams({})}>Reset filter</button>
      </div>
      {showActiveUsers ? <h2>Showing active user </h2>:<h2> showing all users</h2>}
    </div>
  );
};

export default Users;
