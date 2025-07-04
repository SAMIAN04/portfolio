import  { useState, useEffect } from 'react';

function Nav() {
  const [activeItem, setActiveItem] = useState('About');
  const [width, setwidth] = useState(window.innerWidth)
  console.log(width);
  console.log(setwidth);
  
  
  const handleItemClick = (item) => {
    setActiveItem(item);
    
  };

  return (
    <nav className="h-[57.6px] w-[99vw] flex justify-center items-center bg-[#2b2b2cbf] fixed bottom-0 z-0 backdrop-blur-xl rounded-tr-3xl rounded-tl-3xl border-[1px] border-[#383838]
     lg:w-[700px] lg:mb-2 
    ">
      <div>
        <ol className="flex gap-8 text-[14px] lg:gap-14 ">
          {['About', 'Resume', 'Portfolio', 'Contact'].map((item) => (
            <li
              key={item}
              onClick={() => handleItemClick(item)}
              className={`cursor-pointer transition-all duration-300  ${
                activeItem === item
                  ? 'text-[#72fcc2fb] font-semibold scale-190 -translate-y-3'  // Active state styling
                  : 'text-gray-400'
              }hover:text-3xl  ` }
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
