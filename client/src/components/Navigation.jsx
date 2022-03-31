import React from 'react';
import { Outlet } from 'react-router-dom';

function Navigation() {
   return (
      <div>
         <h1>Navigation</h1>
         <Outlet />
      </div>
   )
}

export default Navigation