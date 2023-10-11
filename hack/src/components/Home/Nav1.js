import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Link} from 'react-router-dom';

function Navtop() {
    const toggleMenu = () => {
        const navbarCollapse = document.getElementById('navbarCollapse');
        navbarCollapse.classList.toggle('show');
    };

    return (
        <>
            <div className="fixed-top  navbar-nav container-fluid p-0 m-0">
                <div className='row1'>
                    <div>WE - TRACKING APP</div>
                    <button type="button" className="navbar-toggler" onClick={toggleMenu} aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-filter-right" viewBox="0 0 16 16">
                            <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z" />
                        </svg>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <Link to='/Input/Home' className='custom-Link'><section  className="nav-link">Home</section></Link>
                    <Link to='/Input/Home/learning' className='custom-Link'><section  className="nav-link">Learning</section></Link>
                    <Link to='/Input/Home/leaderboard' className='custom-Link'><section  className="nav-link">LeaderBoard</section> </Link>
                    <Link to='/Input/Home/service' className='custom-Link'><section  className="nav-link">Service Call</section></Link>
                    <Link to='/Input/Home/product' className='custom-Link'><section className="nav-link as">Best products</section></Link>
                </div>
            </div>
        </>
    );
}

export default Navtop;
