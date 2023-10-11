import React, { useState } from 'react';
import './Input.css';
import './YesorNO.css';
import Target from '../../components/Home/Target.js';
import { useNavigate } from 'react-router-dom';

// /*import AC from '../../Assets/list/AC.webp';
// import fridge from '../../Assets/list/fridge.jpg';
// import fan from '../../Assets/list/fan.webp';
// import light from '../../Assets/list/light.jpg';
// import tv from '../../Assets/list/tv.jpg';
// import ironbox from '../../Assets/list/ironbox.png';
// import mixie from '../../Assets/list/mixie.jpg';
// import grinder from '../../Assets/list/grinder.jpg';
// import washinemachine from '../../Assets/list/washinemachine.webp';
// import waterheater from '../../Assets/list/waterheater.jpg';
// import microwaveoven from '../../Assets/list/microwaveoven.jpg';
// import electricstove from '../../Assets/list/electricstove.jpg';
// import vacumcleaner from '../../Assets/list/vacumcleaner.webp';
// import hairdryer from '../../Assets/list/hairdryer.jpg';
// import Input from './Input.js';
// import Basicdetails from '../../Assets/Home/basicDetails.js';
// import { useNavigate } from 'react-router-dom';
// const YesorNO = () => {
//   const questions = [
//     {
//       image: AC,
//       text: 'Do you use A/C ?',
//     },
//     {
//         image:fridge,
//         text:'Do you use Refridgeretor',

//     },
//     {
//         image:fan,
//         text:'Do you use Fan ?',
//     },
//     {
//         image:light,
//         text:'Do you use LED Light ?',
//     },
//     {
//         image:tv,
//         text:'Do you use TV?'
//     },
//     {
//         image:ironbox,
//         text:'Do you use Ironbox?',
//     },
//     {
//         image:mixie,
//         text:'Do you use Mixie?',
//     },
//     {
//         image:grinder,
//         text:'Do you use Grinder',
//     },
//     {
//         image:washinemachine,
//         text:'Do you use Washing machine?',
//     },
//     {
//         image:waterheater,
//         text:'Do you use Water heater',
//     },
//     {
//         image:microwaveoven,
//         text:'Do you use Micronwave oven',
//     },
//     {
//         image:electricstove,
//         text:'Do you use Electric Stove',
//     },
//     {
//         image:vacumcleaner,
//         text:'Do you use Vacum Cleaner?',
//     },
//     {
//         image:hairdryer,
//         text:'Do you use Hair dryer',
//     },
//     // Add more questions with their respective images and text
//   ];

//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));
//   const [followUpValues, setFollowUpValues] = useState({
//     hours: '',
//     days: '',
//     watts: '',
//   });

//   const handleButtonClick = (index, answer) => {
//     const newAnswers = [...answers];
//     newAnswers[index] = answer;
//     setAnswers(newAnswers);
//   };

//   const handleInputChange = (key, value) => {
//     setFollowUpValues((prevValues) => ({
//       ...prevValues,
//       [key]: value,
//     }));
//   };

//   const [additionalInputs, setAdditionalInputs] = useState([]);
//   const handleAddMoreClick = () => {
//     const id = additionalInputs.length; // Assign a unique ID
//     setAdditionalInputs((prevInputs) => [
//       ...prevInputs,
//       {
//         id: id,
//         input: (
//           <div key={id}>
//             <input
//               type="text"
//               placeholder="Enter a product name"
//               className="form-control mt-2"
//               onChange={(e) => handleInputChange('name', e.target.value)}
//             />
//             <Input onInputChange={(value) => handleInputValues(id, value)} />
//             <button className="btn btn-dark remove" onClick={() => handleRemoveInput(id)}>
//               Remove
//             </button>
//           </div>
//         ),
//       },
//     ]);
//   };

//   const handleInputValues = (id, inputValues) => {
//     const { hours, days, watts, count } = inputValues;
//     const basicDetailsInstance = new Basicdetails(`Product ${id}`, parseFloat(watts), parseInt(count));
//     basicDetailsInstance.Assign(parseFloat(hours), parseFloat(days), parseFloat(watts));
//     // Store or use the basicDetailsInstance as needed
//   };

//   const handleRemoveInput = (id) => {
//     setAdditionalInputs((prevInputs) => prevInputs.filter((input) => input.id !== id));
//   };

//   return (
//     <>
//       <h2 className='text-center'>Electrical Appliances</h2>
//       <div className='container-fluid pt-2'>
//         {questions.map((question, index) => (
//           <div key={index} className='inputsec col'>
//             {/* Existing code for displaying questions */}
//           </div>
//         ))}
//       </div>
//       <div className="addother">
//         <button className="btn btn-dark fixed-bottom" onClick={handleAddMoreClick}>
//           Click to Add more
//         </button>
//       </div>

//       {additionalInputs.map((input) => (
//         <div key={input.id} className="additional-input">
//           {input.input}
//         </div>
//       ))}

//       <div className='submit'>
//         <Link to='/Input/Home'>
//           <button className='btn btn-primary mb-5' type='submit'>ENTER</button>
//         </Link>
//       </div>
//     </>
//   );
// };

function YesorNO(){
  const[target,setTarget]=useState('');
  const [showTarget, setShowTarget] = useState(false);
  const navigate = useNavigate();
  function calculateUsage() {
    // Fetch values from the form
    const preunit=parseFloat(document.getElementById('preunit').value);
    const acpreunit =  1700;
    const acCount = parseInt(document.getElementById('acCount').value);
    const acHours = parseFloat(document.getElementById('acHours').value);
    const acWeeks = parseFloat(document.getElementById('acWeeks').value);

    const frpreunit =  80;
    const frCount = parseInt(document.getElementById('frCount').value);
    const frHours = parseFloat(document.getElementById('frHours').value);
    const frWeeks = parseFloat(document.getElementById('frWeeks').value);

    const fanpreunit =  50;
    const fanCount = parseInt(document.getElementById('fanCount').value);
    const fanHours = parseFloat(document.getElementById('fanHours').value);
    const fanWeeks = parseFloat(document.getElementById('fanWeeks').value);


    const ledpreunit =  15;
    const ledCount = parseInt(document.getElementById('ledCount').value);
    const ledHours = parseFloat(document.getElementById('ledHours').value);
    const ledWeeks = parseFloat(document.getElementById('ledWeeks').value);

    const tlpreunit =  50;
    const tlCount = parseInt(document.getElementById('tlCount').value);
    const tlHours = parseFloat(document.getElementById('tlHours').value);
    const tlWeeks = parseFloat(document.getElementById('tlWeeks').value);

    const tvpreunit = 70;
    const tvCount = parseInt(document.getElementById('tvCount').value);
    const tvHours = parseFloat(document.getElementById('tvHours').value);
    const tvWeeks = parseFloat(document.getElementById('tvWeeks').value);

    const ibpreunit = 1200;
    const ibCount = parseInt(document.getElementById('ibCount').value);
    const ibHours = parseFloat(document.getElementById('ibHours').value);
    const ibWeeks = parseFloat(document.getElementById('ibWeeks').value);

    const mxpreunit = 600;
    const mxCount = parseInt(document.getElementById('mxCount').value);
    const mxHours = parseFloat(document.getElementById('mxHours').value);
    const mxWeeks = parseFloat(document.getElementById('mxWeeks').value);

    const grpreunit = 750;
    const grCount = parseInt(document.getElementById('grCount').value);
    const grHours = parseFloat(document.getElementById('grHours').value);
    const grWeeks = parseFloat(document.getElementById('grWeeks').value);

    const wmpreunit = 800;
    const wmCount = parseInt(document.getElementById('wmCount').value);
    const wmHours = parseFloat(document.getElementById('wmHours').value);
    const wmWeeks = parseFloat(document.getElementById('wmWeeks').value);

    const htpreunit = 4000;
    const htCount = parseInt(document.getElementById('htCount').value);
    const htHours = parseFloat(document.getElementById('htHours').value);
    const htWeeks = parseFloat(document.getElementById('htWeeks').value);

    const ovpreunit = 1500;
    const ovCount = parseInt(document.getElementById('ovCount').value);
    const ovHours = parseFloat(document.getElementById('ovHours').value);
    const ovWeeks = parseFloat(document.getElementById('ovWeeks').value);

    const stpreunit = 2000;
    const stCount = parseInt(document.getElementById('stCount').value);
    const stHours = parseFloat(document.getElementById('stHours').value);
    const stWeeks = parseFloat(document.getElementById('stWeeks').value);

    const vcpreunit = 900;
    const vcCount = parseInt(document.getElementById('vcCount').value);
    const vcHours = parseFloat(document.getElementById('vcHours').value);
    const vcWeeks = parseFloat(document.getElementById('vcWeeks').value);

    const hdpreunit =  1200;
    const hdCount = parseInt(document.getElementById('hdCount').value);
    const hdHours = parseFloat(document.getElementById('hdHours').value);
    const hdWeeks = parseFloat(document.getElementById('hdWeeks').value);
    const target  = parseFloat(document.getElementById('target').value);
    setTarget(target);
    // Repeat the above pattern to fetch values for other appliances

    // Perform calculations (you may replace this with your actual calculations)
    const actotalUnits = acpreunit * (acCount * acHours * acWeeks * 9 * 1700) / 1000;
    const fantotalUnits = fanpreunit * (fanCount * fanHours * fanWeeks * 9 * 1700) / 1000;
    const frtotalUnits = frpreunit * (frCount * frHours * frWeeks * 9 * 1700) / 1000;
    const ledtotalUnits = ledpreunit * (ledCount * ledHours * ledWeeks * 9 * 1700) / 1000;
    const tltotalUnits = tlpreunit * (tlCount * tlHours * tlWeeks * 9 * 1700) / 1000;
    const tvtotalUnits = tvpreunit * (tvCount * tvHours * tvWeeks * 9 * 1700) / 1000;
    const ibtotalUnits = ibpreunit * (ibCount * ibHours * ibWeeks * 9 * 1700) / 1000;
    const mxtotalUnits = mxpreunit * (mxCount * mxHours * mxWeeks * 9 * 1700) / 1000;
    const grtotalUnits = grpreunit * (grCount * grHours * grWeeks * 9 * 1700) / 1000;
    const wmtotalUnits = wmpreunit * (wmCount * wmHours * wmWeeks * 9 * 1700) / 1000;
    const httotalUnits = htpreunit * (htCount * htHours * htWeeks * 9 * 1700) / 1000;
    const ovtotalUnits = ovpreunit * (ovCount * ovHours * ovWeeks * 9 * 1700) / 1000;
    const sttotalUnits = stpreunit * (stCount * stHours * stWeeks * 9 * 1700) / 1000;
    const vctotalUnits = vcpreunit * (vcCount * vcHours * vcWeeks * 9 * 1700) / 1000;
    const hdtotalUnits = hdpreunit * (hdCount * hdHours * hdWeeks * 9 * 1700) / 1000;

    let tunit=0;
    tunit+=actotalUnits;
    tunit+=frtotalUnits;
    tunit+=fantotalUnits;
    tunit+=ledtotalUnits;
    tunit+=tltotalUnits;
    tunit+=tvtotalUnits;
    tunit+=ibtotalUnits;
    tunit+=mxtotalUnits;
    tunit+=grtotalUnits;
    tunit+=wmtotalUnits;
    tunit+=httotalUnits;
    tunit+=ovtotalUnits;
    tunit+=sttotalUnits;
    tunit+=vctotalUnits;
    tunit+=hdtotalUnits;

let acper = actotalUnits*100/tunit;
let frper = frtotalUnits*100/tunit;
let fanper = fantotalUnits*100/tunit;
let tvper = tvtotalUnits*100/tunit;
let ledper = ledtotalUnits*100/tunit;
let tlper = tltotalUnits*100/tunit;
let ibper = ibtotalUnits*100/tunit;
let mxper = mxtotalUnits*100/tunit;
let grper = grtotalUnits*100/tunit;
let htper = httotalUnits*100/tunit;
let ovper = ovtotalUnits*100/tunit;
let stper = sttotalUnits*100/tunit;
let wmper = wmtotalUnits*100/tunit;
let vcper = vctotalUnits*100/tunit;
let hdper = hdtotalUnits*100/tunit;

let acwat = acper*preunit/100;
let frwat = frper*preunit/100;
let fanwat = fanper*preunit/100;
let tvwat = tvper*preunit/100;
let ledwat = ledper*preunit/100;
let tlwat = tlper*preunit/100;
let ibwat = ibper*preunit/100;
let mxwat = mxper*preunit/100;
let grwat = grper*preunit/100;
let htwat = htper*preunit/100;
let ovwat = ovper*preunit/100;
let stwat = stper*preunit/100;
let wmwat = wmper*preunit/100;
let vcwat = vcper*preunit/100;
let hdwat = hdper*preunit/100;
console.log(acwat);
console.log(tvper);
console.log(target);
setShowTarget(true);

    // Redirect to the desired route
    navigate('/Input/Home');

    // Display the result
   // document.getElementById('result').innerHTML = `Total units: ${totalUnits}`;
}
  return(
      <>
      <h1>Electricity Usage Calculator</h1>

<form id="electricityForm">
    <label for="preunit">Enter the Unit amount of Previous month:</label>
    <input type="number" id="preunit" />

    <label for="acCount">Enter the count of AC:</label>
    <input type="number" id="acCount" />

    <label for="acHours">How many hours you use AC per Day?</label>
    <input type="number" id="acHours" />

    <label for="acWeeks">How many days you are using AC per Week?</label>
    <input type="number" id="acWeeks" />

    <label for="frCount">Enter the count of Fridge:</label>
    <input type="number" id="frCount" />

    <label for="frHours">How many hours you use Fridge per Day?</label>
    <input type="number" id="frHours" />

    <label for="frWeeks">How many days you are using Fridge per Week?</label>
    <input type="number" id="frWeeks" />

    <label for="fanCount">Enter the count of Fan:</label>
    <input type="number" id="fanCount" />

    <label for="fanHours">How many hours you use Fan per Day?</label>
    <input type="number" id="fanHours" />

    <label for="fanWeeks">How many days you are using Fan per Week?</label>
    <input type="number" id="fanWeeks" />

    <label for="ledCount">Enter the count of LED:</label>
    <input type="number" id="ledCount" />

    <label for="ledHours">How many hours you use LED per Day?</label>
    <input type="number" id="ledHours" />

    <label for="ledWeeks">How many days you are using LED per Week?</label>
    <input type="number" id="ledWeeks" />
    <label for="tlCount">Enter the count of TUBELIGHT:</label>
    <input type="number" id="tlCount" />

    <label for="tlHours">How many hours you use TUBELIGHT per Day?</label>
    <input type="number" id="tlHours" />

    <label for="tlWeeks">How many days you are using TUBELIGHT per Week?</label>
    <input type="number" id="tlWeeks" />

    <label for="tvCount">Enter the count of TV:</label>
    <input type="number" id="tvCount" />

    <label for="tvHours">How many hours you use TV per Day?</label>
    <input type="number" id="tvHours" />

    <label for="tvWeeks">How many days you are using TV per Week?</label>
    <input type="number" id="tvWeeks" />

    <label for="ibCount">Enter the count of IRONBOX:</label>
    <input type="number" id="ibCount" />

    <label for="ibHours">How many hours you use IRONBOX per Day?</label>
    <input type="number" id="ibHours" />

    <label for="ibWeeks">How many days you are using IRONBOX per Week?</label>
    <input type="number" id="ibWeeks" />

    <label for="mxCount">Enter the count of MIXER:</label>
    <input type="number" id="mxCount" />

    <label for="mxHours">How many hours you use MIXER per Day?</label>
    <input type="number" id="mxHours" />

    <label for="mxWeeks">How many days you are using MIXER per Week?</label>
    <input type="number" id="mxWeeks" />

    <label for="grCount">Enter the count of GRINDER:</label>
    <input type="number" id="grCount" />

    <label for="grHours">How many hours you use GRINDER per Day?</label>
    <input type="number" id="grHours" />

    <label for="grWeeks">How many days you are using GRINDER per Week?</label>
    <input type="number" id="grWeeks" />

    <label for="wmCount">Enter the count of WASHINGMACHINE:</label>
    <input type="number" id="wmCount" />

    <label for="wmHours">How many hours you use WASHINGMACHINE per Day?</label>
    <input type="number" id="wmHours" />

    <label for="wmWeeks">How many days you are using WASHINGMACHINE per Week?</label>
    <input type="number" id="wmWeeks" />

    <label for="htCount">Enter the count of HEATER:</label>
    <input type="number" id="htCount" />

    <label for="htHours">How many hours you use HEATER per Day?</label>
    <input type="number" id="htHours" />

    <label for="htWeeks">How many days you are using HEATER per Week?</label>
    <input type="number" id="htWeeks" />

    <label for="ovCount">Enter the count of OVEN:</label>
    <input type="number" id="ovCount" />

    <label for="ovHours">How many hours you use OVEN per Day?</label>
    <input type="number" id="ovHours" />

    <label for="ovWeeks">How many days you are using OVEN per Week?</label>
    <input type="number" id="ovWeeks" />

    <label for="stCount">Enter the count of STOVE:</label>
    <input type="number" id="stCount" />

    <label for="stHours">How many hours you use STOVE per Day?</label>
    <input type="number" id="stHours" />

    <label for="stWeeks">How many days you are using STOVE per Week?</label>
    <input type="number" id="stWeeks" />

    <label for="vcCount">Enter the count of VACUUM:</label>
    <input type="number" id="vcCount" />

    <label for="vcHours">How many hours you use VACUUM per Day?</label>
    <input type="number" id="vcHours" />

    <label for="vcWeeks">How many days you are using VACUUM per Week?</label>
    <input type="number" id="vcWeeks" />

    <label for="hdCount">Enter the count of HAIRDRYER:</label>
    <input type="number" id="hdCount" />

    <label for="hdHours">How many hours you use HAIRDRYER per Day?</label>
    <input type="number" id="hdHours" />

    <label for="hdWeeks">How many days you are using HAIRDRYER per Week?</label>
    <input type="number" id="hdWeeks" />


    <label for="hdWeeks">Your next month target(units)</label>
    <input type="number" id="target" />
    {showTarget && target && <Target target={target} />}
    <button type="button" onClick={calculateUsage}>Calculate</button>

     
     
</form>

<div id="result"></div>
      </>
  );
}
export default YesorNO;