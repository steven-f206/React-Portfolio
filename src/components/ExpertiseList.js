import React,{useContext} from 'react';
import { AppContext } from './AppContext';

const ExpertiseList = () => {

  const {expertise} = useContext(AppContext);

  return(
    <section id="expertise">
      <div id="expertise-grid">
      <h2>EXPERTISE</h2>
      {expertise[0].map(expertise => (
      <div key={expertise.id} className="expertise-piece">
        <div><img src={expertise.icon} alt={expertise.alt} width="50px" height="50px" loading="lazy"/></div>
        <h5>{expertise.heading}</h5>
        <p>{expertise.copy}</p>
        <p className="skillset-heading">SKILLSET</p>
        <div className="expertise-icons">
          {expertise.skills.map((skill,index) => (
            <div className="tooltip" key={index} >
            <img key={skill[0]} src={skill[1]} alt={skill[2]} loading="lazy"/>
            <span className="tooltiptext">{skill[2]}</span>
            </div>
          ))}
        </div>
         
      </div>
      ))}
      </div>
    </section>
  );
}

export default ExpertiseList