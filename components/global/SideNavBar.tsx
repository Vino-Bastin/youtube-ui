import {
  AiFillFire,
  AiFillHome,
  AiFillSetting,
  AiFillShopping,
  AiFillYoutube,
} from "react-icons/ai";
import { BiHelpCircle, BiMoviePlay } from "react-icons/bi";
import { BsMusicNote } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { GiShorts } from "react-icons/gi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoAddCircleOutline } from "react-icons/io5";
import {
  MdHistory,
  MdOutlineLiveTv,
  MdOutlineVideoLibrary,
  MdSportsBaseball,
  MdSubscriptions,
} from "react-icons/md";
import { SiSololearn, SiYoutubegaming, SiYoutubemusic } from "react-icons/si";
import { GoReport } from "react-icons/go";
import { TbBrandYoutubeKids } from "react-icons/tb";

import NavItem from "./NavItem";

const SideNavBar = () => {
  return (
    <div className="flex sidebar">
      <div className="flex flex-col">
        <NavItem icon={<AiFillHome size={26} />} text="home" />
        <NavItem icon={<GiShorts size={26} />} text="Shorts" />
        <NavItem icon={<MdSubscriptions size={26} />} text="Subscriptions" />
        <div className="border-b-[1px] my-2 border-zinc-700" />
        <NavItem icon={<MdOutlineVideoLibrary size={26} />} text="Library" />
        <NavItem icon={<MdHistory size={26} />} text="History" />
        <div className="border-b-[1px] my-2 border-zinc-700" />
        {/* sign in button */}
        <div className="flex flex-wrap flex-col mx-6 w-48">
          <p>Sign in to like videos, comment and subscribe.</p>
          <div className="my-2 flex gap-1 justify-center items-center px-2 py-1 rounded-r-full rounded-l-full border-[1px] border-zinc-800 cursor-pointer hover:bg-blue-900 hover:bg-opacity-60">
            <HiOutlineUserCircle size={22} className="text-blue-600" />
            <p className="text-blue-600">Sign in</p>
          </div>
        </div>
        <div className="border-b-[1px] my-2 border-zinc-700" />
        <p className="mx-8 text-lg">Explore</p>
        <NavItem icon={<AiFillFire size={26} />} text="Trending" />
        <NavItem icon={<AiFillShopping size={26} />} text="Shopping" />
        <NavItem icon={<BsMusicNote size={26} />} text="Music" />
        <NavItem icon={<BiMoviePlay size={26} />} text="Movie" />
        <NavItem icon={<MdOutlineLiveTv size={26} />} text="Live" />
        <NavItem icon={<SiYoutubegaming size={26} />} text="Gaming" />
        <NavItem icon={<MdSportsBaseball size={26} />} text="Sports" />
        <NavItem icon={<SiSololearn size={26} />} text="Learning" />
        <NavItem icon={<FaShoppingBag size={26} />} text="Fashion" />
        <div className="border-b-[1px] my-2 border-zinc-700" />
        <NavItem icon={<IoAddCircleOutline size={26} />} text="channels" />
        <div className="border-b-[1px] my-2 border-zinc-700" />
        <p className="mx-8 text-lg">More From YouTube</p>
        <NavItem icon={<AiFillYoutube size={26} />} text="YouTube Premium" />
        <NavItem icon={<SiYoutubemusic size={26} />} text="YouTube Music" />
        <NavItem icon={<TbBrandYoutubeKids size={26} />} text="YouTube Kids" />
        <div className="border-b-[1px] my-2 border-zinc-700" />
        <NavItem icon={<AiFillSetting size={26} />} text="Settings" />
        <NavItem icon={<GoReport size={24} />} text="Report History" />
        <NavItem icon={<BiHelpCircle size={26} />} text="Help" />
        <NavItem icon={<GoReport size={24} />} text="Report" />
        <div className="border-b-[1px] my-2 border-zinc-700" />
      </div>
    </div>
  );
};

export default SideNavBar;
