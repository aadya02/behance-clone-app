import React from 'react';
import { Image, Search, SlidersHorizontal } from 'lucide-react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { sortingOptions } from '../constants';

const SearchSection = () => {
  return (
    <div className="px-5 my-4 flex flex-col lg:justify-between lg:flex-row">
      <button className="hidden lg:flex border rounded-full w-[10%]">
        <div className="m-auto flex">
          <span className="my-auto">
            <SlidersHorizontal height={20} width={20} />
          </span>
          <span className="ml-3 font-bold my-auto">Filter</span>
        </div>
      </button>

      <div
        id="search-bar"
        className="flex justify-between border rounded-full px-4 py-2 bg-[#F9F9F9] lg:w-[73%]"
      >
        <div id="search-left-section" className="flex w-[60%]">
          <div className="my-auto">
            <Search className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="flex-grow outline-none px-2 text-gray-700 bg-[#F9F9F9] placeholder:font-bold placeholder:text-[#191919] truncate"
            placeholder="Search the creative world at work"
          />
        </div>
        <button className="hidden items-center space-x-1 text-gray-700 text-sm font-bold border rounded-full px-4 py-2 bg-white lg:flex xl:flex">
          <Image height={20} width={20} className="mr-1" />
          <span>Search by Image</span>
        </button>
      </div>

      <div
        id="filter-section"
        className="border rounded-full px-4 py-2 lg:hidden mt-4"
      >
        <button
          className="xs:m-auto sm:m-auto lg:my-auto flex justify-center"
          type="button"
        >
          <span className="my-auto">
            <SlidersHorizontal height={20} width={20} />
          </span>
          <span className="ml-3 font-bold">Filter</span>
        </button>
      </div>

      <Box
        sx={{ minWidth: 120 }}
        className="hidden lg:flex border rounded-full w-[15%]"
        id="sort-by-dropdown-container"
      >
        <FormControl fullWidth>
          <InputLabel id="sort-by-dropdown-label">Sort</InputLabel>
          <Select
            labelId="sort-by-dropdown-label"
            id="sort-by-dropdown"
            label="Sort"
            fullWidth
            className="[&>fieldset]:border-none font-bold"
          >
            {sortingOptions.map((option) => {
              return (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default SearchSection;
