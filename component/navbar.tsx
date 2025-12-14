import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // for mobile menu toggle
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2  -translate-x-1/2 z-50 w-[95%] max-w-5xl ">
      <div className="backdrop-blur-lg bg-black/30  shadow-md rounded-3xl max-w-7xl mx-auto px-6">
        <div className={`
    flex justify-between items-center max-w-7xl mx-auto
    transition-all duration-300
    ${scrolled ? "h-12 px-12" : "h-16 px-6"}`}>

           {/* Logo */}
          <div className="text-2xl font-bold">
            <Link className="text-white hover:text-gray-200" to="/">MyBrand</Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li><Link className="text-white text-lg font-bold hover:text-gray-300 transition" to="/">Home</Link></li>
            <li><Link className="text-white text-lg font-bold hover:text-gray-300 transition" to="/shop">Shop</Link></li>
            <li><a href="#" className="text-white text-lg font-bold hover:text-gray-300 transition">About</a></li>
            <li><a href="#" className="text-white text-lg font-bold hover:text-gray-300 transition">Contact</a></li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className=" md:hidden backdrop-blur-lg bg-white/50 border border-white/10 rounded-3xl mt-1 px-3 pt-2 pb-3 space-y-2 shadow-md">
          <Link  className="flex justify-center  px-3 py-2 text-gray-800 font-bold text-lg  rounded hover:bg-white/30 rounded-3xl " to="/">Home</Link>
          <Link className="flex justify-center  px-3 py-2 text-gray-800 font-bold text-lg rounded hover:bg-white/30 rounded-3xl  " to="/shop">Shop</Link>
          <a href="#" className="flex justify-center  px-3 py-2 text-gray-800 font-bold text-lg rounded hover:bg-white/30 rounded-3xl  ">About</a>
          <a href="#" className="flex justify-center  px-3 py-2 text-gray-800 font-bold text-lg rounded hover:bg-white/30 rounded-3xl  ">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
