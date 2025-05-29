'use client'
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
      navigate:"/"
    },
    {
      id: 2,
      link: "Contact Us",
      navigate:"/pages/contactus"
    },
    {
      id: 3,
      link: "Privacy Policy",
      navigate:"/pages/privacy"
    },
  
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#6b5b95] fixed nav z-[1000]">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-3xl font-signature ml-2">
          <Link
            className="link-underline link-underline-black"
            href="/"
            
            rel="noreferrer"
          >
            Goys To Temp Mail
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link,navigate }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-white duration-200 link-underline"
          >
            <Link href={navigate}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ?
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXE-7NOQoTeNU0m88Gne-Ucb9V6gjm4ol54w&s'} height={30} width={20}></img>
        : 
        <img src={'https://cdn-icons-png.flaticon.com/512/2311/2311531.png'} height={20} width={20}></img>
        }
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link ,navigate}) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={navigate}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;