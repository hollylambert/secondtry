import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

const Design = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Design;
