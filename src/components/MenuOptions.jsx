import React from 'react';
import { Divider } from '@mui/material';
import Pill from './Pill';
import { BEHANCE, menuOptions, PRO } from '../constants';

const MenuOptions = ({ className, listItemClassName }) => {
  return (
    <ul id="menu-options" className={`${className} list-none my-auto`}>
      {menuOptions.map((option, index) => {
        return (
          <React.Fragment key={index}>
            <li
              className={`mx-3 font-bold cursor-pointer w-fit ${listItemClassName}`}
              key={option}
              tabIndex={0}
            >
              {option}
              {option === BEHANCE && <Pill text={PRO} className="ml-2" />}
            </li>
            {option === BEHANCE && (
              <Divider orientation="vertical" flexItem className="px-1" />
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuOptions;
