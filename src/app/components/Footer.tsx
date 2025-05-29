import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="flex h-14 justify-center items-center bg-[#6b5b95]">
      <div>
        <ul className="list-none flex space-x-2">
          <li
            
            className="hover:drop-shadow-xl cursor-pointer p-2 rounded-full text-white font-bold"
          >
            © Copyright by Goys To Temp Mail
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
