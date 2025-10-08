import React, { useState } from 'react';
import { MessageCircle, Mail, MapPin, Clock, Phone, Send, User, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    servico: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Formatação da mensagem com todas as informações do formulário
    let message = `*Nova solicitação de contato - Sani Terapia Energética*%0A%0A`;
    message += `👤 *Nome:* ${formData.nome}%0A`;
    message += `📱 *Telefone:* ${formData.telefone}%0A`;

    if (formData.servico) {
      message += `🎯 *Serviço de interesse:* ${formData.servico}%0A`;
    }

    if (formData.mensagem) {
      message += `💬 *Mensagem:* ${formData.mensagem}%0A`;
    }

    message += `%0A📅 *Data/Hora:* ${new Date().toLocaleString('pt-BR')}`;

    // Número de teste do usuário: (92) 98139-5614
    window.open(`https://wa.me/559291270700?text=${message}`, '_blank');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/559291270700?text=Olá! Gostaria de agendar uma sessão de terapia energética.', '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 font-['Poppins'] mb-6">
            Entre em <span className="text-[#4C8A82]">Contato</span>
          </h1>
          <p className="text-xl text-gray-600 font-['Open_Sans'] max-w-3xl mx-auto leading-relaxed">
            Estamos aqui para ajudar você a começar sua jornada de bem-estar. <br />
            Entre em contato e agende sua sessão de terapia energética.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 font-['Poppins'] mb-8">
                  Informações de Contato
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-[#F5F5F5] rounded-2xl">
                    <MessageCircle size={24} className="text-[#4C8A82] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 font-['Poppins'] mb-1">WhatsApp</h3>
                      <p className="text-gray-600 font-['Open_Sans']">(92) 98139-5614</p>
                      <button
                        onClick={handleWhatsAppClick}
                        className="text-[#4C8A82] hover:text-[#3d6f68] font-medium font-['Open_Sans'] text-sm mt-2"
                      >
                        Clique para enviar mensagem →
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-[#F5F5F5] rounded-2xl">
                    <MapPin size={24} className="text-[#4C8A82] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 font-['Poppins'] mb-1">Endereço</h3>
                      <div className="flex items-center space-x-2">
                        <img
                          src="/logo-CETHO.png"
                          alt="logo CETHO Terapias Integrativas"
                          className="h-14 w-auto rounded-full"
                        />
                      </div>
                      <p className="text-gray-600 font-['Open_Sans']">
                        <strong> CETHO Terapias Integrativas  2º Andar Sala 6.</strong> <br />
                        Av. Tancredo Neves, 1142<br />
                        Pq 10 de Novembro<br />
                        Manaus - AM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-[#F5F5F5] rounded-2xl">
                    <Clock size={24} className="text-[#4C8A82] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800 font-['Poppins'] mb-1">Atendimento</h3>
                      <p className="text-gray-600 font-['Open_Sans']">Por agendamento</p>
                      <p className="text-sm text-gray-500 font-['Open_Sans'] mt-1">
                        Horários flexíveis conforme sua necessidade
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="bg-[#F5F5F5] rounded-2xl shadow-lg overflow-hidden">
                <h2 className="text-3xl font-bold text-gray-800 font-['Poppins'] mb-4 p-8">Nossa Localização</h2>
                <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.097953566647!2d-60.004402199999994!3d-3.0684913999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c101387108077%3A0xdb7d087e171cd447!2sSani%20Terapia%20Energ%C3%A9tica!5e0!3m2!1spt-BR!2sbr!4v1758826722351!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Sani Terapia Energética"
                  ></iframe>
                </div>
                <p className="text-sm text-gray-600 font-['Open_Sans'] mt-4 p-8">

                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F5F5F5] rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 font-['Poppins'] mb-8">
                Envie uma Mensagem
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 font-['Open_Sans'] mb-2">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <User size={20} className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4C8A82] focus:border-[#4C8A82] font-['Open_Sans']"
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 font-['Open_Sans'] mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone size={20} className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4C8A82] focus:border-[#4C8A82] font-['Open_Sans']"
                      placeholder="(92) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="servico" className="block text-sm font-medium text-gray-700 font-['Open_Sans'] mb-2">
                    Serviço de Interesse
                  </label>
                  <select
                    id="servico"
                    name="servico"
                    value={formData.servico}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4C8A82] focus:border-[#4C8A82] font-['Open_Sans']"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Acupuntura">Acupuntura (Laserpuntura, Auriculoterapia, Ventosaterapia)</option>
                    <option value="Reiki">Reiki</option>
                    <option value="Shiatsu Express">Shiatsu Express</option>
                    <option value="Combinação de terapias">Combinação de terapias</option>
                    <option value="Não sei ainda">Não sei ainda - preciso de orientação</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 font-['Open_Sans'] mb-2">
                    Mensagem
                  </label>
                  <div className="relative">
                    <FileText size={20} className="absolute left-3 top-3 text-gray-400" />
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4C8A82] focus:border-[#4C8A82] font-['Open_Sans']"
                      placeholder="Conte-nos como podemos ajudar você..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#4C8A82] hover:bg-[#3d6f68] text-white py-4 rounded-xl font-['Open_Sans'] font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Enviar via WhatsApp</span>
                </button>
              </form>

              <p className="text-sm text-gray-600 font-['Open_Sans'] mt-4 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pronta
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;