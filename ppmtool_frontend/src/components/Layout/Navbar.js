import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from "react-icons/io"
import { Link } from 'react-router-dom';
import  {SidebarData}  from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import AuthenticationService from '../UserManagement/AuthenticationService';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const isUserLoggedin=AuthenticationService.isUserLoggedin();

  const name=AuthenticationService.getLoggedInUserName();
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                { isUserLoggedin && <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>}
                {/* <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link> */}
                </li>
              );
            })}
            {isUserLoggedin && <li className='nav-text'>
              <Link to={`/profile/${name}`}>
              <IoIcons.IoMdPeople/>
              <span>profile</span>
              </Link>
            </li>}
            {isUserLoggedin && <li className='nav-text'>
              <Link to='/login' onClick={AuthenticationService.logout}>
              <AiIcons.AiOutlineLogout/>
              <span>logout</span>
              </Link>
            </li>}
            

          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;