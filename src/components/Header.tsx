import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5592991270700?text=Olá! Gostaria de agendar uma sessão de terapia energética.', '_blank');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo da empresa.jpg" 
              alt="Sani Terapia Energética" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-['Open_Sans'] font-medium transition-colors ${
                isActive('/') 
                  ? 'text-[#4C8A82] border-b-2 border-[#4C8A82] pb-1' 
                  : 'text-gray-700 hover:text-[#4C8A82]'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/servicos" 
              className={`font-['Open_Sans'] font-medium transition-colors ${
                isActive('/servicos') 
                  ? 'text-[#4C8A82] border-b-2 border-[#4C8A82] pb-1' 
                  : 'text-gray-700 hover:text-[#4C8A82]'
              }`}
            >
              Serviços
            </Link>
            <Link 
              to="/contato" 
              className={`font-['Open_Sans'] font-medium transition-colors ${
                isActive('/contato') 
                  ? 'text-[#4C8A82] border-b-2 border-[#4C8A82] pb-1' 
                  : 'text-gray-700 hover:text-[#4C8A82]'
              }`}
            >
              Contato
            </Link>
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#4C8A82] hover:bg-[#3d6f68] text-white px-6 py-2 rounded-full font-['Open_Sans'] font-medium transition-colors flex items-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>Chamar no WhatsApp</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-['Open_Sans'] font-medium transition-colors ${
                  isActive('/') ? 'text-[#4C8A82]' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/servicos" 
                className={`font-['Open_Sans'] font-medium transition-colors ${
                  isActive('/servicos') ? 'text-[#4C8A82]' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="/contato" 
                className={`font-['Open_Sans'] font-medium transition-colors ${
                  isActive('/contato') ? 'text-[#4C8A82]' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <button
                onClick={() => {
                  handleWhatsAppClick();
                  setIsMenuOpen(false);
                }}
                className="bg-[#4C8A82] text-white px-6 py-2 rounded-full font-['Open_Sans'] font-medium flex items-center space-x-2 w-fit"
              >
                <MessageCircle size={18} />
                <span>Chamar no WhatsApp</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;