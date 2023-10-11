import './Service.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ework from '../../Assets/ework.jpg';
function Electricity(){
    return(
        <>
        <div className='container m-0 p-0'>
            <div className='detail row'>
                <div className='col-4'>
                <img src={ework} width="75px" height="80%" alt='worker img'></img>
                </div> 
                <div className='col-8 basic'>
                    <div>Name:adam</div>
                   <a href="tel:555-555-5555"><div>Contact:9681252XXX</div></a>
                   <div>Experience: 5+</div>
                </div>
            </div>
            <div className='detail row'>
                <div className='col-4'>
                <img src={ework} width="75px" height="80%" alt='worker img'></img>
                </div> 
                <div className='col-8 basic'>
                    <div>Name:adam</div>
                   <a href="tel:555-555-5555"><div>Contact:9681252XXX</div></a>
                   <div>Experience: 5+</div>
                </div>
            </div>
            <div className='detail row'>
                <div className='col-4'>
                <img src={ework} width="75px" height="80%" alt='worker img'></img>
                </div> 
                <div className='col-8 basic'>
                    <div>Name:adam</div>
                   <a href="tel:555-555-5555"><div>Contact:9688775421</div></a>
                   <div>Experience: 5+</div>
                </div>
            </div>
            <div className='detail row'>
                <div className='col-4'>
                <img src={ework} width="75px" height="80%" alt='worker img'></img>
                </div> 
                <div className='col-8 basic'>
                    <div>Name:adam</div>
                   <a href="tel:555-555-5555"><div>Contact:9681252XXX</div></a>
                   <div>Experience: 5+</div>
                </div>
            </div>

        </div>
        </>
    )
};
export default Electricity;