import React, {useContext, useEffect} from 'react';
import { AppContext } from './AppContext';
import AnchorLink from 'react-anchor-link-smooth-scroll';
//import ActiveCheck from './ActiveCheck';


const Nav = () => {

  /********************************************* Start of Initialize context state elements *********************************************/
  // Handle mobile class for operating menu
  const {mobileNav} = useContext(AppContext);
  let [mobileNavs, setMobileNavs] = mobileNav;
  // Handles checking wheather the nav should change look based on window scroll position
  const {scroll} = useContext(AppContext);
  let [scrolls, setScrolls] = scroll;
  // Handle setting active class one navbar element
  const {navActive} = useContext(AppContext);
  let [active, setActive] = navActive;
  // Navigation Assesibility
  const {navInMobile} = useContext(AppContext);
  let [inMobile, setinMobile] = navInMobile;

  

  /********************************************* End of Initialize context state elements *********************************************/

  // Navigation mobile menu controller
  const onClickHandler = (e) => {
    e.preventDefault();
    if (e.target.href !== undefined){
      setMobileNavs( mobileNavs = false);
    }else{
      setMobileNavs( mobileNavs === false ? true: false);
    }
  }

  // Navigation Assesibility mobile menu controller
  const scrolled = () => {
    if(window.scrollY >= 120){
        setScrolls( scrolls = true);
      }else{
        setScrolls( scrolls = false);
      }
    } 
 

  // Homepage specific style checker
  const inMobileCheck = () => {
  if(window.innerWidth < 900){
      setinMobile( inMobile = true);
    }else{
      setinMobile( inMobile = false);
      setMobileNavs( mobileNavs = false);
    }
  }  


  // Homepage specific style checker until scrolled out of section
  const IsElementXPercentInViewport = function(el, percentVisible) {
    let
      rect = el.getBoundingClientRect(),
      windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  
      return !(
        Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
        Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
      )
    };

    let ActiveSetter = () => {
      document.addEventListener("scroll", () => {
        if( IsElementXPercentInViewport(document.querySelector("#home"), 10) === true){
          setActive(active = "home");
        }else if( IsElementXPercentInViewport(document.querySelector("#expertise"), 10) === true){
          setActive(active = "expertise");
        }else if( IsElementXPercentInViewport(document.querySelector("#portfolio"), 10) === true){
          setActive(active = "portfolio");
        }else if( IsElementXPercentInViewport(document.querySelector("#contact"), 10) === true){
          setActive(active = "contact");
        }
      });
    }
    
    let ActiveCheck = () => {
      ActiveSetter();
    }
  

  /********************************************* Call lifecycle methods *********************************************/

  useEffect(() => {
    if(window.scrollY >= 120) setScrolls( scrolls === false ? true: false);
    if(window.innerWidth < 900) setScrolls( scrolls === false ? true: false);
    //ActiveMenuLink();
    ActiveCheck();
    inMobileCheck();
    window.addEventListener("scroll", scrolled);
    window.addEventListener("resize", inMobileCheck);
  }, []);


  return(
<nav className={ (mobileNavs === false ? '' : 'mobile-menu') + ' ' + (scrolls === false ? '' : 'scrolled')} >
    <button className="icon" id="myMenuFunction" onClick={onClickHandler} aria-label={(mobileNavs === false) ? "Menu Closed":"Menu Open" } >
        <svg className="inline-svg" version="1.1" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 23.5 25">
            <title>Mobile Menu</title>
            <g className="svg-menu-toggle">
                <path className="bar" d="M20.945,8.75c0,0.69-0.5,1.25-1.117,1.25H3.141c-0.617,0-1.118-0.56-1.118-1.25l0,0c0-0.69,0.5-1.25,1.118-1.25h16.688C20.445,7.5,20.945,8.06,20.945,8.75L20.945,8.75z"></path>
                <path className="bar" d="M20.923,15c0,0.689-0.501,1.25-1.118,1.25H3.118C2.5,16.25,2,15.689,2,15l0,0c0-0.689,0.5-1.25,1.118-1.25 h16.687C20.422,13.75,20.923,14.311,20.923,15L20.923,15z"></path>
                <path className="bar" d="M20.969,21.25c0,0.689-0.5,1.25-1.117,1.25H3.164c-0.617,0-1.118-0.561-1.118-1.25l0,0 c0-0.689,0.5-1.25,1.118-1.25h16.688C20.469,20,20.969,20.561,20.969,21.25L20.969,21.25z"></path>
                <rect fill="none"></rect>
            </g>
        </svg>
    </button>
    <div id="anchors">
      <AnchorLink 
        href='#home' 
        onClick={onClickHandler} 
        tabIndex={(mobileNavs === false && inMobile !== false) ? "-1":"0"  }
        className={` ${(active === "home" ) ? 'active' : ''} `}
       >HOME
      </AnchorLink>
      <AnchorLink 
        href='#expertise' 
        onClick={onClickHandler} 
        tabIndex={(mobileNavs === false && inMobile !== false) ? "-1":"0"}
        className={` ${(active === "expertise" ) ? 'active' : ''} `}
        >EXPERTISE
      </AnchorLink>
      <AnchorLink 
        href='#portfolio'  
        onClick={onClickHandler} 
        tabIndex={(mobileNavs === false && inMobile !== false) ? "-1":"0"}
        className={` ${(active === "portfolio" ) ? 'active' : ''} `}
        >PORTFOLIO
      </AnchorLink>
      <AnchorLink 
        href='#contact' 
        onClick={onClickHandler} 
        tabIndex={(mobileNavs === false && inMobile !== false ) ? "-1":"0"}
       className={` ${(active === "contact" ) ? 'active' : ''} `}
        >CONTACT
      </AnchorLink>
    </div>
</nav>
  )
}

export default Nav