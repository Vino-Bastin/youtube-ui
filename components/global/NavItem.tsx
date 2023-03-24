import React from "react";

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text }) => {
  return (
    <div className="w-44 flex items-center gap-4 px-2 py-1 mx-8 my-1 cursor-pointer hover:bg-zinc-700 rounded-xl">
      {icon}
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default NavItem;
