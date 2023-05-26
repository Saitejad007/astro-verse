import React from "react";

const Navbar = () => {
  const menuItems = [
    {
      title: "Home",
      url: "/",
      cName: "nav-links",
    },
    {
      title: "Explore",
      url: "#",
      cName: "nav-links",
    },
    {
      title: "Our Planet",
      url: "#",
      cName: "nav-links",
    },
    {
      title: "Our Universe",
      url: "#",
    },
    {
      title: "Feedback",
      url: "#",
    },
  ];
  return (
    <nav className="h-20 p-9 flex items-center justify-between w-full backdrop-blur-sm border-spacing-5 border-b border-b-gray border-opacity-10">
      <h1 className="text-4xl font-extrabold">
        <span className="astro-style">Astro</span>
        <span className="verse-style">Verse</span>
      </h1>
      <ul className="flex gap-6">
        {menuItems.map((item, index) => (
          <li key={index} className="nav-links align-middle justify-center">
            <a
              href={item.url}
              className="text-base font-semibold hover:bg-lightblue px-4 py-1 border border-opacity-0 hover:border hover:border-opacity-100 border-cosmic-purple hover:shadow-sm hover:shadow-nebula-pink  rounded-xl"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
