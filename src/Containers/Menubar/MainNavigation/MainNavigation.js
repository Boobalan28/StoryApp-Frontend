import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../Backdrop/Backdrop';
import MainHeader from '../Mainheader/Mainheader'
import NavLinks from '../Navlinks/NavLinks'
import SideDrawer from '../SideDrawer/SideDrawer';
import './MainNavigation.css';
const MainNavigation = props => {
  let attachedClasses = ['SideDrawer', 'Close'];

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  if (drawerIsOpen) {
    attachedClasses = ['SideDrawer', 'Open'];
  }
  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}

      <div className={attachedClasses.join(' ')}>
        {(
          <SideDrawer open={drawerIsOpen} closed={closeDrawer} >
            <h3 className="text-left mt-2 pl-4">Story Book</h3>
            <hr />
            <nav className="main-navigation__drawer-nav" >
              <NavLinks />
            </nav>
          </SideDrawer>
        )}
      </div>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Story Book</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;