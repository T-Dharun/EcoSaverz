import 'bootstrap/dist/css/bootstrap.min.css';
import './Service.css';
import './Product.css';
import led from '../../Assets/ledlight.jpg';
function Eproduct(){
    return(
        <div>
            <div className="product row">
                    <div className='col-4'><img src={led} alt='led light' width="50px" height="50px"></img></div>
                    <div className='col-7 basic'>
                        <div>LED light</div>
                        <div>Power rating:2kw</div>
                        <div>Saving:156%</div>
                    </div>                
            </div>
            <div className="product row">
                    <div className='col-4'><img src={led} alt='led light' width="50px" height="50px"></img></div>
                    <div className='col-7 basic'>
                        <div>LED light</div>
                        <div>Power rating:2kw</div>
                        <div>Saving:156%</div>
                    </div>                
            </div>
            <div className="product row">
                    <div className='col-4'><img src={led} alt='led light' width="50px" height="50px"></img></div>
                    <div className='col-7 basic'>
                        <div>LED light</div>
                        <div>Power rating:2kw</div>
                        <div>Saving:156%</div>
                    </div>                
            </div>
            <div className="product row">
                    <div className='col-4'><img src={led} alt='led light' width="50px" height="50px"></img></div>
                    <div className='col-7 basic'>
                        <div>LED light</div>
                        <div>Power rating:2kw</div>
                        <div>Saving:156%</div>
                    </div>                
            </div>
            <div className="product row">
                    <div className='col-4'><img src={led} alt='led light' width="50px" height="50px"></img></div>
                    <div className='col-7 basic'>
                        <div>LED light</div>
                        <div>Power rating:2kw</div>
                        <div>Saving:156%</div>
                    </div>                
            </div>
        </div>
    );
}
export default Eproduct;