import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsYoutube, BsFillMicFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BiDotsVerticalRounded } from "react-icons/bi";

const TopNavBar = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      {/* logo */}
      <div className="flex items-center gap-4 ml-4">
        <div className="cursor-pointer p-2 hover:bg-zinc-700 rounded-full">
          <FiMenu size={26} />
        </div>
        <div className="flex items-center gap-1">
          <BsYoutube size={30} color="red" />
          <span>YouTube</span>
        </div>
      </div>

      {/* search bar */}
      <div className="flex items-center gap-4 justify-center md:w-1/2">
        <div className="flex w-2/3">
          <div className="search-bar hidden md:flex w-full items-center bg-zinc-900 border-[1px] border-zinc-800 px-4 py-2 rounded-l-full focus-within:border-blue-500">
            <AiOutlineSearch size={24} className="mr-4 search-icon" />
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none focus:ring-0 bg-zinc-900 text-zinc-100 w-full"
            />
          </div>

          {/* search icon  */}
          <div className="flex bg-zinc-800 px-2 md:px-4 py-2 items-center rounded-full md:rounded-r-full md:rounded-l-none cursor-pointer">
            <AiOutlineSearch size={24} />
          </div>

          {/* mic icon */}
          <div className="ml-1 flex items-center cursor-pointer p-2 px-3 hover:bg-zinc-700 rounded-full">
            <BsFillMicFill size={20} />
          </div>
        </div>
      </div>

      {/* profile */}
      <div className="flex items-center gap-2 mr-4">
        <div className="cursor-pointer p-2 hover:bg-zinc-700 rounded-full">
          <BiDotsVerticalRounded size={30} />
        </div>
        <div className="flex gap-1 items-center px-2 py-1 rounded-r-full rounded-l-full border-[1px] border-zinc-800 cursor-pointer hover:bg-blue-900 hover:bg-opacity-60">
          <HiOutlineUserCircle size={22} className="text-blue-600" />
          <p className="text-blue-600">Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
