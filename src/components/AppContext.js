import React, {useState, createContext} from 'react';
import {portfolioData} from '../json/portfolioData.js';
import {expertiseData} from '../json/expertiseData.js';

export const AppContext = createContext();

export const AppProvider = props => {
  const [portfolio, setPortfolio] = useState(portfolioData);
  const [expertise, setExperience] = useState(expertiseData);
  const [mobileNav, setMobileNav] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [active, setActive] = useState("home");
  const [inMobile, setinMobile] = useState(true);


  return(
    <AppContext.Provider value={{ 
      portfolio: [portfolio, setPortfolio],
      expertise: [expertise, setExperience], 
      mobileNav: [mobileNav, setMobileNav], 
      scroll: [scroll, setScroll],
      navActive: [active, setActive],
      navInMobile: [inMobile, setinMobile]
       }}>
      {props.children}
    </AppContext.Provider>
  );
}
