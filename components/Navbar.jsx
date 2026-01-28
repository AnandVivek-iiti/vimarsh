"use client";

import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "People", id: "people" },
  { label: "Events", id: "events" },
  { label: "Departmental Outreach", id: "outreach" },
];

export default function Navbar() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="relative z-20 py-4 px-8">
      <ul className="flex justify-center items-center gap-10 text-lg font-medium text-black">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => handleScroll(item.id)}
              className="hover:text-blue-800 transition-colors"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
