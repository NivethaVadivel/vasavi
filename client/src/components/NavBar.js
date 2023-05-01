import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
// import styles from '../css/NavBar.module.css'
import '../css/NavBar.css'
import vasavilogo from '../images/vasavilogo.png'
import { Login } from './login'
import { useAuth } from './utils/Authentication'
// function NavBar() {
//     const auth=useAuth()
//   return (
//     <nav className={styles.navbarelt}>
//     <div className={styles.navbarcontainer}>
//     <Link to="/events" className={styles.navlink1}>Events</Link>
//     <Link to="/booking" className={styles.navlink2}>Booking</Link>
//     <Link to="/" className={styles.navlink3}><img src={vasavilogo}/></Link>
//     <Link to="/contactus" className={styles.navlink4}>Contact Us</Link>
//     {auth.user ? <Link to="/profile" className={styles.navlink5}>Profile</Link>: <Link to="/login" className={styles.navlink5}  >Login</Link>}

//     </div>
//     </nav>
//   )
// }
function NavBar() {
  const auth=useAuth()
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          {/* <NavLink exact to="/" className="nav-logo"> */}
          <div className="nav-logo">
            
            <img src={vasavilogo}></img>
           <span className='nav-head'>VASAVI MAHAL</span> 
          </div>
          {/* </NavLink> */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/hotel"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                exact
                to="/locate"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Locate Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contactus"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
            {auth.user ?
             <NavLink exact to="/profile" activeClassName="active" className="nav-links" onClick={click ? handleClick : null}>Profile</NavLink>
             : <NavLink ecxact to="/login"  activeClassName="active"className="nav-links" onClick={click ? handleClick : null} >Login</NavLink>}
             </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>}
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default NavBar