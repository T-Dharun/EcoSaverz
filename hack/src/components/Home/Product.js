import './Service.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Eproduct from './Eproduct.js';
import Wproduct from './Wproduct.js';
import Nav3 from './Nav3.js';
function Product(){
    const[swap,setSwap]=useState(0)
    return(
        <>
        <nav className='navbar navbar-expand-lg bg-dark '>
            <div className='navbar-brand'>
                <h4 className='text-white p-1'>Best Products</h4>
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
            {swap === 0 ? <Eproduct /> : <Wproduct/>}
        </div>
        <Nav3 />
    </>
    );
}

export default Product;