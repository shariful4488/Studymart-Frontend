import React from 'react';
import Banner from '../../components/Banner';
import TopPartners from '../../components/TopPartners';
import HowItWorks from '../../components/HowItWorks';
import Testimonials from '../../components/Testimonials';

const Home = () => {
    return (
        <div>
            <main className='container mx-auto px-4 py-8'>
                <Banner/>

                <TopPartners/>
                <HowItWorks/>
                <Testimonials/>

            </main>
        </div>
    );
};

export default Home;