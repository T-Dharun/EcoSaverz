import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css';
import './Product.css';
import showerhead from '../../Assets/showerhead.jpg';
function Wproduct(){
    return(
        <div>
        <div className="product row">
                <div className='col-4'><img src={showerhead} alt='Low flow shower' width="50px" height="50px"></img></div>
                <div className='col-7 basic'>
                    <div>Low flow shower</div>
                    <div>* * * *</div>
                    <div>Water Saving:76%</div>
                </div>                
        </div>
        <div className="product row">
                <div className='col-4'><img src={showerhead} alt='Low flow shower' width="50px" height="50px"></img></div>
                <div className='col-7 basic'>
                    <div>Low flow shower</div>
                    <div>* * * *</div>
                    <div>Saving:76%</div>
                </div>                
        </div>
        <div className="product row">
                <div className='col-4'><img src={showerhead} alt='Low flow shower' width="50px" height="50px"></img></div>
                <div className='col-7 basic'>
                    <div>Low flow shower</div>
                    <div>* * * *</div>
                    <div>Saving:76%</div>
                </div>                
        </div>
        <div className="product row">
                <div className='col-4'><img src={showerhead} alt='Low flow shower' width="50px" height="50px"></img></div>
                <div className='col-7 basic'>
                    <div>Low flow shower</div>
                    <div>* * * *</div>
                    <div>Saving:76%</div>
                </div>                
        </div>
        <div className="product row">
                <div className='col-4'><img src={showerhead} alt='Low flow shower' width="50px" height="50px"></img></div>
                <div className='col-7 basic'>
                    <div>Low flow shower</div>
                    <div>* * * *</div>
                    <div>Saving:76%</div>
                </div>                
        </div>
    </div>
    );
}
export default Wproduct;