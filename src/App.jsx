import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [highlightedText, setHighlightedText] = useState('');

  useEffect(() => {
    
    const text = "CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS | PHARMA SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE | METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL";

    
    const updatedText = text.replace(/\|/g, '<span class="highlight">|</span>');

    
    setHighlightedText(updatedText);
  }, []);

  return (
    <>
      <div className="header">
        <img src="images/logo.png" alt="" className='banner' />
      </div>
      <div className="description">
        <div className="trophy">
          <img src="images/1.png" alt="" className='trophy' />
        </div>
        <div className="content">
          <h4> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
          <ul>
            <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
            <li>  C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
          </ul>
          <img src="images/2.png" alt="" className='pic2'/>
          <p>Government of India has awarded the <b> "National Energy Conservation Award 2018" </b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
        </div>
      </div>
      <p className='end'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
      <div className="supplies">
        <img src="images/3.png" alt="" className='supplies-img' />
        <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
      </div>
      <hr />
      <div className="end">
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <p dangerouslySetInnerHTML={{ __html: highlightedText }}></p>
      </div>
      <div className="footer">
        <div className="icons">
          <i className="fa-solid fa-phone" style={{ color: '#ffffff' }}></i>
          <p> Toll Free 1800 200 1234 </p>
        </div>
        <div className="icons">
          <i className="fa-brands fa-facebook" style={{ color: ' #ffffff' }}></i>
          <p> www.facebook.com/cripumps</p>
        </div>
        <div className="icons">
          <i className="fa-solid fa-globe" style={{ color: ' #ffffff' }}></i>
         <p> www.crigroups.com </p>
        </div>
      </div>
    </>
  );
}

export default App;
