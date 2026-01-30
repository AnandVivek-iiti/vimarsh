"use client";

import Image from "next/image";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "People", id: "people" },
  { label: "Events", id: "events" },
  { label: "Departmental Outreach", id: "outreach" },
];

export default function HomePageImage() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative left-0 w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:min-h-screen"
    >


      {/* Sidebar Navigation */}
      <div className="absolute left-0 top-0 h-full z-20 w-64 overflow-y-auto">
        <nav className="bg-white shadow-lg h-full">


          {/* Navigation Items */}
          <ul className="flex flex-col">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="w-full text-left px-4 py-3 text-blue-900 font-medium bg-gray-200 hover:bg-blue-300 cursor-pointer border-b-2 border-white transition-colors duration-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>


    </section>
  );
}