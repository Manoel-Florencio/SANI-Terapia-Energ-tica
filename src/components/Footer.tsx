import React from 'react';
import { Instagram, Facebook, MessageCircle, Mail, MapPin } from 'lucide-react';

// Configuração dos links das redes sociais - ALTERE AQUI OS LINKS DO CLIENTE
const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/sani.terapiaenergetica/', 
  facebook: 'https://www.facebook.com/Sani.Inamara', 
  whatsapp: {
    number: '5592991270700', // Número do WhatsApp (com código do país)
    message: 'Olá! Gostaria de agendar uma sessão de terapia energética.' // Mensagem padrão
  }
};

const Footer = () => {
  // Função para abrir Instagram
  const handleInstagramClick = () => {
    window.open(SOCIAL_LINKS.instagram, '_blank');
  };

  // Função para abrir Facebook
  const handleFacebookClick = () => {
    window.open(SOCIAL_LINKS.facebook, '_blank');
  };

  // Função para abrir WhatsApp
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${SOCIAL_LINKS.whatsapp.number}?text=${encodeURIComponent(SOCIAL_LINKS.whatsapp.message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-[#4C8A82] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo da empresa.jpg" 
                alt="Sani Terapia Energética" 
                className="h-17 w-auto "
              />
            </div>
            <p className="text-sm opacity-90 font-['Open_Sans'] leading-relaxed">
              Saúde e bem-estar de dentro para fora. <br /> Cuidado integral respeitando sua individualidade.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="font-['Poppins'] font-semibold text-lg">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/" className="text-sm opacity-90 hover:opacity-100 transition-opacity font-['Open_Sans']">
                Home
              </a>
              <a href="/servicos" className="text-sm opacity-90 hover:opacity-100 transition-opacity font-['Open_Sans']">
                Serviços
              </a>
              <a href="/contato" className="text-sm opacity-90 hover:opacity-100 transition-opacity font-['Open_Sans']">
                Contato
              </a>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="font-['Poppins'] font-semibold text-lg">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MessageCircle size={16} />
                <span className="text-sm font-['Open_Sans']">(92) 99127-0700</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm font-['Open_Sans']">
                 <strong>CETHO Terapias Integrativas</strong> <br />
                  Av. Tancredo Neves, 1142<br />
                  Pq 10 de Novembro - Manaus - AM
                </span>
                <div className="flex items-center space-x-2">
                        <img
                          src="/logo-CETHO.png"
                          alt="logo CETHO Terapias Integrativas"
                          className="h-14 w-auto rounded-full"
                        />
                      </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="flex space-x-4 pt-4">
              <button 
                onClick={handleInstagramClick}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Instagram"
                title="Seguir no Instagram"
              >
                <Instagram size={20} />
              </button>
              <button 
                onClick={handleFacebookClick}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Facebook"
                title="Seguir no Facebook"
              >
                <Facebook size={20} />
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="WhatsApp"
                title="Conversar no WhatsApp"
              >
                <MessageCircle size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75 font-['Open_Sans']">
            © 2025 Sani Terapia Energética. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
