import React from 'react';
import './Certification.css';
import C from './c.jpg';
import JS from './JavaScript.jpg';
import DS from './Data Science.jpg';

function Certification() {
  return (
  <>
  <div className="certification">Certifications</div>
  <div className="card-holder">
    <div className="card">
      <img src={C} alt="none" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">C++ with DataStructures</h3>
        {/* <p className="card-subtitle">{subtitle}</p> */}
        <p className="card-author">-by Coding-Blocks</p>
      </div>
    </div>
    <div className="card">
      <img src={JS} alt="none" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">C++ with DataStructures</h3>
        {/* <p className="card-subtitle">{subtitle}</p> */}
        <p className="card-author">-by Coding-Blocks</p>
      </div>
    </div>
    <div className="card">
      <img src={DS} alt="none" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">C++ with DataStructures</h3>
        {/* <p className="card-subtitle">{subtitle}</p> */}
        <p className="card-author">-by Coding-Blocks</p>
    </div>
  </div>
</div>
</>

  );
}
export default Certification;