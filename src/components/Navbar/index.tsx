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

  const [isOpen, setIsOpen] = React.useState(false);

  const hamLine = `h-1 my-1 rounded-full bg-white transition ease transform duration-300`;
  return (
    <>
      <nav
        className={`px-4 group w-full backdrop-blur-sm border-spacing-5 border-b border-b-gray border-opacity-10 z-20`}
      >
        <div className="h-20 p-9 flex items-center justify-between w-full">
          <h1 className="text-4xl font-extrabold">
            <span className="astro-style">Astro</span>
            <span className="verse-style">Verse</span>
          </h1>
          <ul className="hidden lg:flex gap-6">
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

          <button
            className="lg:hidden md:flex flex-col justify-center items-center bg-transparent p-2 h-12 group transition ease transform duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex flex-col justify-center">
              <span
                className={`w-8 ${hamLine} ${
                  isOpen
                    ? "rotate-45 translate-y-3 opacity-80 group-hover:opacity-100"
                    : "rotate-0 opacity-80 group-hover:opacity-100"
                }`}
              />
              <span
                className={`${
                  isOpen ? "opacity-0" : "opacity-80 group-hover:opacity-100"
                } w-6 ${hamLine}`}
              />
              <span
                className={`${hamLine} w-8 ${
                  isOpen
                    ? "-rotate-45 -translate-y-3 opacity-80 group-hover:opacity-100"
                    : "rotate-0 opacity-80 group-hover:opacity-100"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>
      <div
        className={`absolute h-screen w-screen backdrop-blur-3xl z-10 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } flex transition-all ease duration-500 lg:-translate-y-full`}
      >
        <ul className="mt-20 flex flex-col gap-8 p-10">
          {menuItems.map((item, index) => (
            <li className="nav-links align-middle justify-center" key={index}>
              <a
                href={item.url}
                className="text-xl font-normal hover:bg-lightblue px-4 py-1 border border-opacity-0 hover:border hover:border-opacity-100 border-cosmic-purple hover:shadow-sm hover:shadow-nebula-pink rounded-xl"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
//create hamburger menu using tailwind css
