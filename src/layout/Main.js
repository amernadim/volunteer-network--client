import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';

const Main = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <NavBar/>
      <Outlet/>
    </div>
  );
};

export default Main;