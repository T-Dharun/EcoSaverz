import 'bootstrap/dist/css/bootstrap.min.css';
import Nav3 from './Nav3.js';
import './Service.css';
import Electricity from './Electricity.js';
import Water from './Water.js';  // Import the Water component
import React, { useState } from 'react';

function Service() {
    const [swap, setSwap] = useState(0);  // Change variable name to lowercase 'swap'

    return (
        <>
            <nav className='navbar navbar-expand-lg bg-dark '>
                <div className='navbar-brand'>
                    <h4 className='text-white p-1'>Service Contacts</h4>
                </div>
            </nav>
            <div className='top-we mt-0'>
                <div className={swap === 0 ? 'top-e active' : 'top-e'} onClick={() => setSwap(0)}>
                    ELECTRICITY
                </div>
                <div className={swap === 1 ? 'top-w active' : 'top-w'} onClick={() => setSwap(1)}>
                    WATER
                </div>
            </div>
            <div>
                {swap === 0 ? <Electricity /> : <Water />}
            </div>
            <Nav3 />
        </>
    );
}

export default Service;
