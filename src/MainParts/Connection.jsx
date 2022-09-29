import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Outlet} from 'react-router-dom'
const Connection = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer/>
        </>
    );
}

export default Connection;
