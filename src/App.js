import React from 'react';
import {AppProvider} from './components/AppContext';
import Nav from './components/Nav'
import Home from './components/Home'
import ExpertiseList from './components/ExpertiseList';
import PortfolioList from './components/PortfolioList';
import Contact from './components/Contact';
import 'remove-focus-outline';

//Added for accessibility makes focus ring only when tabbing

let handleFirstTab = (e) =>{
  if (e.keyCode === 9) { // the "I am a keyboard user" key
      document.body.classList.add('user-is-tabbing');
      document.removeEventListener('keydown', handleFirstTab);
  }
}

document.addEventListener('keydown', handleFirstTab);


function App() {
  return (
    <AppProvider> 
      {/* Add js-focus-visible to listen if someone uses keyboard focus touse website */}
      <div>
        <Nav />
        <Home />
        <ExpertiseList />
        <PortfolioList />
        <Contact />
      </div>
    </AppProvider>
  );
}

export default App;
