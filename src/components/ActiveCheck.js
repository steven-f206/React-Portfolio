import React, {useContext} from 'react';
import { AppContext } from './AppContext';

// Handle setting active class one navbar element
const {navActive} = useContext(AppContext);
let [active, setActive] = navActive;

// This checks if the an elements viewport is in view it takes two arguements.
// 1) The element to watch.
// 2) How much the element in percent has to be in the viewport before it takes effect.

const IsElementXPercentInViewport = function(el, percentVisible) {
  let
    rect = el.getBoundingClientRect(),
    windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    return !(
      Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
  };
  
  let ActiveCheck = () => {
    document.addEventListener("scroll", () => {
      if( IsElementXPercentInViewport(document.querySelector("#home"), 20) === true){
        setActive(active = "home");
      }else if( IsElementXPercentInViewport(document.querySelector("#expertise"), 20) === true){
        setActive(active = "expertise");
      }else if( IsElementXPercentInViewport(document.querySelector("#portfolio"), 20) === true){
        setActive(active = "portfolio");
      }else if( IsElementXPercentInViewport(document.querySelector("#contact"), 20) === true){
        setActive(active = "contact");
      }
    });
  }

  export default ActiveCheck