import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div> 
            <header>
                <nav className='mx-auto my-3'>
                    <Navbar/>
                </nav>
            </header>

            <main className='min-h-[80vh]'>
                <section className='main'>
                    <Outlet/>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default HomeLayout;