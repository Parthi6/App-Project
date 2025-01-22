import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('collection')) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  // Handle the search icon click to trigger search or open the search
  const handleSearchIconClick = () => {
    if (!search) {
      // Open the search bar if search is empty or do other logic here
      setShowSearch(true);
    } else {
      // Perform the search action here (you can add your search logic here)
      console.log('Searching for:', search);
      // Example: redirecting to a search results page with the search query
      // history.push(`/search?q=${search}`);
    }
  };

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img
          className="w-4 cursor-pointer"
          src={assets.search_icon}
          alt="Search"
          onClick={handleSearchIconClick} // Trigger the search on click
        />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer"
        src={assets.cross_icon}
        alt="Close"
      />
    </div>
  ) : null;
};

export default SearchBar;