import { useState } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { BiX, BiMenu } from 'react-icons/bi';  // Import the icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(prevState => !prevState);  // Toggle the state
  }

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white background-blur-md md:justify-evenly">
      <a href="#home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition all duration-300 hover:opacity-100">
        Tejas
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        <li><a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Home</a></li>
        <li><a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Tech</a></li>
        <li><a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Projects</a></li>
        <li><a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Contact</a></li>
      </ul>

      {/* Social Icons */}
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
          <BsLinkedin />
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
          <BsGithub />
        </li>
      </ul>

      {/* Hamburger Menu (for mobile view) */}
      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen}/>
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen}/>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12">
          <ul className="flex flex-col gap-8">
            <li><a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Home</a></li>
            <li><a href="#Tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Tech</a></li>
            <li><a href="#Projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Projects</a></li>
            <li><a href="#Contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Contact</a></li>
          </ul>
          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
              <BsLinkedin />
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
              <BsGithub />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
