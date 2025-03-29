import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0a2512] text-white">
      <div className="container mx-auto py-4 px-4 md:px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z"></path>
              <path d="M12 12v6"></path>
              <path d="M12 8v.5"></path>
            </svg>
          </div>
          <h1 className="text-xl font-bold">Echofy</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-white hover:text-green-400 text-sm">Home</a>
          <a href="#" className="text-white hover:text-green-400 text-sm">About</a>
          <a href="#" className="text-white hover:text-green-400 text-sm">Services</a>
          <a href="#" className="text-white hover:text-green-400 text-sm">Pages</a>
          <a href="#" className="text-white hover:text-green-400 text-sm">Blog</a>
          <a href="#" className="text-white hover:text-green-400 text-sm">Contact</a>
        </nav>

        {/* Get Started Button */}
        <button className="hidden md:block bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a2512] text-white px-6 py-4 space-y-4 text-center">
          <a href="#" className="block hover:text-green-400 text-sm">Home</a>
          <a href="#" className="block hover:text-green-400 text-sm">About</a>
          <a href="#" className="block hover:text-green-400 text-sm">Services</a>
          <a href="#" className="block hover:text-green-400 text-sm">Pages</a>
          <a href="#" className="block hover:text-green-400 text-sm">Blog</a>
          <a href="#" className="block hover:text-green-400 text-sm">Contact</a>
          <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg w-full">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
