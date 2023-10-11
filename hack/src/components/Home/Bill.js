import 'bootstrap/dist/css/bootstrap.min.css';
import './Bill.css';
import { useState } from 'react';
import {Link} from 'react-router-dom';
function Bill(){
  const [electricityUnitConsumed, setElectricityUnitConsumed] = useState('');

  const handleElectricityUnitChange = (e) => {
      setElectricityUnitConsumed(e.target.value);
  };

  const handleSaveBill = () => {
      // Now you can use the electricityUnitConsumed value as needed
      console.log('Electricity Unit Consumed:', electricityUnitConsumed);

      // Rest of your code for saving the bill data...
  };

    return (
        <div className='billb text-white'>
            <div className='get'>
                <h4>Electricity</h4>
                <div>Enter the Last month Electricity bill amount</div>
                <input
                  className='input-form'
                  placeholder='$ last month bill amount'
                  
        
                />
                <div>Enter the Last month Electricity unit consumed</div>
                <input
                  className='input-form'
                  placeholder='last month unit consumed'
                  value={electricityUnitConsumed}
                  onChange={handleElectricityUnitChange}
                />
                <h4>Water</h4>
                <div>Enter the Last month Water bill amount</div>
                <input
                  className='input-form'
                  placeholder='$ last month bill amount'
                 
                  
                />
                <div>Enter the Last month Water Liter consumed</div>
                <input
                  className='input-form'
                  placeholder='last month litre consumed'
                 
                 
                />
            </div>
            <Link to='/bill/Input' className="custom-Link">            
            <div className='btn enter text-white' onClick={handleSaveBill}> 
                ENTER
            </div></Link>

        </div>
    );
}

export default Bill;
