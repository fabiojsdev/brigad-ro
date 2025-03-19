import { useState } from "react";
import { FaBars, FaTimes, FaCookieBite, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/30 backdrop-blur-md shadow-lg z-50 py-6 border-b border-white/20">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo com ícone de brigadeiro */}
        <Link to="hero" smooth={true} duration={500} className="flex items-center gap-2 cursor-pointer">
          <FaCookieBite className="text-3xl text-[#C74040]" />
          <span className="text-3xl font-bold text-[#772626] font-poppins">Brigadêro</span>
        </Link>

        {/* Menu para desktop */}
        <ul className="hidden lg:flex gap-12 text-xl font-medium text-[#772626] items-center font-poppins">
          <li>
            <Link to="brigadeiros" smooth={true} duration={500} className="hover:text-[#C74040] transition-all cursor-pointer">
              Cardápio
            </Link>
          </li>
          <li>
            <Link to="depoimentos" smooth={true} duration={500} className="hover:text-[#C74040] transition-all cursor-pointer">
              Depoimentos
            </Link>
          </li>
          <li>
            <Link to="contato" smooth={true} duration={500} className="hover:text-[#C74040] transition-all cursor-pointer">
              Contato
            </Link>
          </li>
          {/* Ícones de redes sociais */}
          <li className="flex gap-6 ml-8">
            <a href="https://instagram.com/seuinstagram" target="_blank" rel="noopener noreferrer" className="text-[#772626] hover:text-[#C74040] transition-all">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://facebook.com/seufacebook" target="_blank" rel="noopener noreferrer" className="text-[#772626] hover:text-[#C74040] transition-all">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://wa.me/seunumerodewhatsapp" target="_blank" rel="noopener noreferrer" className="text-[#772626] hover:text-[#C74040] transition-all">
              <FaWhatsapp className="text-2xl" />
            </a>
          </li>
        </ul>

        {/* Botão de menu para mobile */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes className="text-[#C74040] text-2xl" /> : <FaBars className="text-[#C74040] text-2xl" />}
        </div>

        {/* Menu para mobile */}
        {isMenuOpen && (
          <ul className="lg:hidden absolute top-20 left-0 w-full bg-white/30 backdrop-blur-md py-4 text-center font-poppins border-b border-white/20">
            <li className="py-3">
              <Link to="hero" smooth={true} duration={500} className="text-[#772626] hover:text-[#C74040] transition-all cursor-pointer text-xl" onClick={toggleMenu}>
                Início
              </Link>
            </li>
            <li className="py-3">
              <Link to="brigadeiros" smooth={true} duration={500} className="text-[#772626] hover:text-[#C74040] transition-all cursor-pointer text-xl" onClick={toggleMenu}>
                Cardápio
              </Link>
            </li>
            <li className="py-3">
              <Link to="depoimentos" smooth={true} duration={500} className="text-[#772626] hover:text-[#C74040] transition-all cursor-pointer text-xl" onClick={toggleMenu}>
                Depoimentos
              </Link>
            </li>
            <li className="py-3">
              <Link to="contato" smooth={true} duration={500} className="text-[#772626] hover:text-[#C74040] transition-all cursor-pointer text-xl" onClick={toggleMenu}>
                Contato
              </Link>
            </li>
            {/* Ícones de redes sociais no mobile */}
            <li className="flex justify-center gap-6 mt-4">
              <a href="https://instagram.com/seuinstagram" target="_blank" rel="noopener noreferrer" className="text-[#772626] hover:text-[#C74040] transition-all">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="https://facebook.com/seufacebook" target="_blank" rel="noopener noreferrer" className="text-[#772626] hover:text-[#C74040] transition-all">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="https://wa.me/seunumerodewhatsapp" target="_blank" rel="noopener noreferrer" className="text-[#772626] hover:text-[#C74040] transition-all">
                <FaWhatsapp className="text-2xl" />
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;