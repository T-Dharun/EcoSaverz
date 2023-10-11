import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import Nav3 from './Nav3.js';
const name = "UserName";
const email = "example@gmail.com";
const phone = "9867675532";
const units="3200";
const price ="1000"
const city = "Erode";

function Profile() {
    return (
        <>
            <div className='profile'>
                <div className='Name'>
                    <Link to='/sih2023/Input/Home' className='custom-Link'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="50" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                        </svg>
                    </button></Link>
                    <div className='but'>Profile</div>

                </div>
                <div className='logo'>
                    <div className='heading'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                        </div>
                        <div>
                            <div className='name2'>Mr. Name </div>
                            <div className='email'>example@gmail.com</div>
                            <div className='email'>Id : 754376XX</div>
                            <div className='email'> fdsfa</div>
                        </div>
                    </div>
                </div>
                <div className='edit'>
                    <div className='edit1'>
                        <div>Name</div>
                        <input type='text' value={name} disabled></input>
                    </div>
                    <div className='edit1'>
                        <div>Email Id</div>
                        <input type="email" value={email} disabled></input>
                    </div>
                    <div className='edit1'>
                        <div>Target Units</div>
                        <input value={units} type='phone'></input>
                    </div>
                    <div className='edit1'>
                        <div>Target Price</div>
                        <input value={price} type='phone'></input>
                    </div>
                    <div className='edit1'>
                        <div>Phone</div>
                        <input value={phone} type='phone'></input>
                    </div>
                    <div className='edit1'>
                        <div>City</div>
                        <input value={city} disabled></input>
                    </div>
                </div>
            </div>
            <Nav3/>
        </>
    );
}
export default Profile;