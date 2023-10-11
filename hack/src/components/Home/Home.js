
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Target from './Target.js';
import Nav2 from './Nav2.js';
import Nav1 from './Nav1.js';
import Nav3 from './Nav3.js';
function Home() {
  return (
    <div className="App">
      <header className="">
          <Nav1/>
          <Nav2/>
          <Target/>
          <Nav3/>
      </header>
    </div>
  );
}
export default Home;
