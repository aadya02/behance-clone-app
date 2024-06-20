import React from 'react';
import { X as CloseIcon } from 'lucide-react';
import { Drawer } from '@mui/material';
import { ReactComponent as AppStoreBadge } from '../assets/app-store-badge.svg';
import { ReactComponent as PlayStoreBadge } from '../assets/google-play-badge.svg';
import MenuOptions from './MenuOptions';
import { footerLinks, languageOptions } from '../constants';

const MenuDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const DRAWER_WIDTH = 270;

  return (
    <Drawer
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
      className="xl:hidden"
    >
      <div id="drawer-container" className="py-4 px-4">
        <div className="flex justify-between">
          <button
            id="drawer-close-button"
            className="cursor-pointer"
            type="button"
          >
            <CloseIcon onClick={() => setIsDrawerOpen(false)} />
          </button>

          <button
            className="text-[#000] text-sm py-2 px-5 my-auto border border-[#DEE8FF] rounded-full font-semibold transition-colors duration-300 ease-in-out hover:bg-[#DEE8FF]"
            type="button"
          >
            Log In
          </button>
        </div>

        <div id="drawer-menu" className="mt-4">
          <MenuOptions listItemClassName="mt-8" />

          <div id="download-links" className="mx-2">
            <a
              target="_blank"
              href="https://itunes.apple.com/us/app/behance/id489667151"
              rel="noopener noreferrer"
              className="w-fit h-fit block mt-[-20px]"
            >
              <AppStoreBadge width={135} height="auto" className="block" />
            </a>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.behance.behance"
              rel="noopener noreferrer"
              className="w-fit h-fit block mt-[-88px]"
            >
              <PlayStoreBadge width={135} height="auto" className="block" />
            </a>
          </div>

          <nav>
            <ul className="text-[11px] font-semibold text-[#191919]">
              <li className="p-2" key="Language">
                <select
                  name="language"
                  id="language"
                  className="cursor-pointer ml-[-4px] mb-2"
                >
                  {languageOptions.map((lang, langIndex) => {
                    return (
                      <option value={lang} key={langIndex}>
                        {lang}
                      </option>
                    );
                  })}
                </select>
              </li>
              {footerLinks.map((link) => {
                return (
                  <li key={link} className="p-2">
                    <span className="hover:underline">{link}</span>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            className="mt-8 bg-[#0057FF] text-white text-sm py-2 px-5 mr-2 my-auto rounded-full font-semibold transition-colors duration-300 ease-in-out hover:bg-[#003ECB]"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </Drawer>
  );
};

export default MenuDrawer;
