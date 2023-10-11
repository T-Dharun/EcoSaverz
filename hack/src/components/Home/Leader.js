import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbot from './Nav3';

function Leader() {
    return (
        <>
            <div className="bg-dark row2">LeaderBoard</div>
            <div className="le1" >
                <div className="bg-dark a">
                    <div>S.NO</div>
                    <div>NAME</div>
                    <div>TARGET</div>
                </div>
                <div>
                    <div>1.</div>
                    <div>SENTHIL</div>
                    <div>1000</div>
                </div>
                <div>
                    <div>2.</div>
                    <div>KUNA</div>
                    <div>1233</div>
                </div>
                <div>
                    <div>3.</div>
                    <div>VELU</div>
                    <div>2333</div>
                </div>
                <div>
                    <div>4.</div>
                    <div>THAMBI</div>
                    <div>2563</div>
                </div>
                <div>
                    <div>5.</div>
                    <div>ANBU</div>
                    <div>3633</div>
                </div>
                <div>
                    <div>6.</div>
                    <div>RAJAN</div>
                    <div>4553</div>
                </div>
                <div>
                    <div>7.</div>
                    <div>VETRI</div>
                    <div>4833</div>
                </div>
                <div>
                    <div>8.</div>
                    <div>JOHN</div>
                    <div>9003</div>
                </div>
                
            </div>
            <Navbot/>
        </>
    );
}
export default Leader;