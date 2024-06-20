import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Menu, Search } from 'lucide-react';
import { ReactComponent as AdobeLogo } from '../assets/adobe-logo.svg';
import { ReactComponent as BehanceFullLogo } from '../assets/behance-full-logo.svg';
import { ReactComponent as BehanceLogo } from '../assets/behance.svg';
import MenuDrawer from './MenuDrawer';
import MenuOptions from './MenuOptions';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header>
        <nav
          id="navbar-container"
          className="flex px-6 py-2 justify-between my-auto border-b shadow-sm"
        >
          <div id="left-section" className="flex">
            <button
              id="hamburger-menu"
              className="my-auto mr-4 cursor-pointer xl:hidden"
              tabIndex={0}
              aria-label="Open menu"
              type="button"
              onClick={() => setIsDrawerOpen(true)}
            >
              <Menu height={20} width={20} />
            </button>

            <span id="behance-logo" className="mr-4 my-auto cursor-pointer">
              <Link to="/" aria-label="Behance home page">
                <BehanceLogo height={25} width={25} className="xl:hidden" />
                <BehanceFullLogo
                  height={20}
                  width={80}
                  className="hidden xl:block"
                />
              </Link>
            </span>
            <MenuOptions className="hidden xl:flex" />
          </div>

          <div id="right-section" className="flex">
            <span
              id="notifications"
              className="my-auto cursor-pointer"
              tabIndex={0}
            >
              <Bell height={20} width={20} fill="#000" />
            </span>
            <button
              className="bg-[#0057FF] text-white text-sm py-2 px-4 mx-4 my-auto rounded-full font-semibold xl:hidden"
              type="button"
            >
              Use App
            </button>
            <button
              className="hidden xl:block bg-[#F5F8FE] text-[#0057FF] text-sm py-2 px-5 mx-2 my-auto border border-[#DEE8FF] rounded-full font-semibold transition-colors duration-300 ease-in-out hover:bg-[#DEE8FF]"
              type="button"
            >
              Log In
            </button>
            <button
              className="hidden xl:block bg-[#0057FF] text-white text-sm py-2 px-5 mr-2 my-auto rounded-full font-semibold transition-colors duration-300 ease-in-out hover:bg-[#003ECB]"
              type="button"
            >
              Sign Up
            </button>
            <div
              id="search-icon"
              className="my-auto cursor-pointer xl:hidden"
              tabIndex={0}
            >
              <Search height={20} width={20} />
            </div>
            <div
              id="adobe-icon"
              className="hidden xl:block ml-2 my-auto cursor-pointer"
              tabIndex={0}
            >
              <AdobeLogo height={30} width={60} />
            </div>
          </div>
        </nav>
      </header>

      <MenuDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </>
  );
};

export default Navbar;
