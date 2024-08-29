import React, { useState } from 'react';

function Nav() {
  const [activeItem, setActiveItem] = useState('About');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="h-[57.6px] w-[99vw] flex justify-center items-center bg-[#2b2b2cbf] fixed bottom-0 z-0 backdrop-blur-xl rounded-tr-xl rounded-tl-xl border-[1px] border-[#383838]">
      <div>
        <ol className="flex gap-8 text-[14px]">
          {['About', 'Resume', 'Portfolio', 'Contact'].map((item) => (
            <li
              key={item}
              onClick={() => handleItemClick(item)}
              className={`cursor-pointer ${
                activeItem === item
                  ? 'text-[#72fcc2fb] font-semibold'  // Active state styling
                  : 'text-gray-400'
              }`}
            >
              {item}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export default Nav;
