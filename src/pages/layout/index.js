import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import {TopBar} from '../../components/top-bar';

const Layout = () => {
  return (
    <div>
        <TopBar/>
            <Outlet/>
          <Footer/>
    </div>
  )
}

export default Layout;