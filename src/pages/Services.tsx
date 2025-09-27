import React, { useState, useEffect } from 'react';
import { MessageCircle, Clock, Star, Zap, Heart, Sparkles, Eye, Palette, Flower } from 'lucide-react';

const Services = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/559291270700?text=Olá! Gostaria de saber mais sobre os serviços de terapia energética.', '_blank');
  };

  // Componente do carrossel de imagens
  const ImageCarousel = ({ images, title }: { images: string[], title: string }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Troca a cada 5 segundos

      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <div className="relative w-full h-96 bg-gradient-to-br from-[#A8D5CD] to-[#4C8A82] rounded-3xl shadow-2xl overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`${title} - Imagem ${currentImageIndex + 1}`}
          className="w-full h-full object-cover opacity-90 transition-opacity duration-1000"
        />
        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  const services = [
    {
      title: "Reiki",
      subtitle: "Terapia Energética",
      description: "Terapia energética que promove equilíbrio físico, mental e espiritual, auxiliando na redução do estresse e trazendo mais vitalidade e serenidade.",
      duration: "~1 hora",
      value: "Conforme plano de atendimento",
      icon: <Heart size={40} />,
      images: ["/reiki_img1.jpg", "/reiki_img2.jpg", "/reiki_img3.jpg"],
      benefits: [
        "Equilíbrio energético",
        "Redução da ansiedade",
        "Maior vitalidade",
        "Sensação de paz interior"
      ]
    },
    {
      title: "Ventosaterapia",
      subtitle: "Terapia com Ventosas",
      description: "Técnica milenar que utiliza copos de sucção para melhorar a circulação sanguínea, aliviar dores musculares e promover o relaxamento profundo.",
      duration: "~45 minutos",
      value: "Conforme avaliação",
      icon: <Sparkles size={40} />,
      images: ["/ventosaterapia_img1.jpg", "/ventosaterapia_img2.jpg", "/ventosaterapia_img3.jpg"],
      benefits: [
        "Melhora da circulação",
        "Alívio de dores musculares",
        "Relaxamento profundo",
        "Redução de tensões"
      ]
    },
    {
      title: "Auriculoterapia",
      subtitle: "Acupuntura na Orelha",
      description: "Técnica que utiliza pontos específicos da orelha para tratar diversos desequilíbrios físicos e emocionais, promovendo bem-estar integral.",
      duration: "~30 minutos",
      value: "Após avaliação inicial",
      icon: <Star size={40} />,
      images: ["/auriculoterapia_img1.jpg", "/auriculoterapia_img2.jpg", "/auriculoterapia_img3.jpg"],
      benefits: [
        "Controle da ansiedade",
        "Alívio de dores",
        "Melhora do sono",
        "Equilíbrio emocional"
      ]
    },
    {
      title: "Shiatsu Express",
      subtitle: "Técnica Rápida e Eficaz",
      description: "Técnica rápida e eficaz de pressão em pontos específicos do corpo, indicada para alívio imediato de tensões e relaxamento.",
      duration: "~30 minutos",
      value: "Conforme avaliação",
      icon: <Zap size={40} />,
      images: ["/shiatsu_img1.jpg", "/shiatsu_img2.jpg", "/shiatsu_img3.jpg"],
      benefits: [
        "Alívio imediato de tensões",
        "Relaxamento muscular",
        "Melhora da circulação",
        "Sensação de bem-estar"
      ]
    },
    {
      title: "Laserterapia",
      subtitle: "Tecnologia Avançada",
      description: "Tratamento com laser de baixa intensidade que acelera a cicatrização, reduz inflamações e promove a regeneração celular de forma não invasiva.",
      duration: "~20-30 minutos",
      value: "Conforme protocolo",
      icon: <Eye size={40} />,
      images: ["/laserterapia_img1.jpg", "/laserterapia_img2.jpg", "/laserterapia_img3.jpg"],
      benefits: [
        "Acelera cicatrização",
        "Reduz inflamações",
        "Regeneração celular",
        "Tratamento não invasivo"
      ]
    },
    {
      title: "Cromoterapia",
      subtitle: "Terapia das Cores",
      description: "Terapia que utiliza as propriedades das cores para equilibrar os chakras, harmonizar as energias e promover bem-estar físico e emocional.",
      duration: "~45 minutos",
      value: "Conforme plano",
      icon: <Palette size={40} />,
      images: ["/cromoterapia_img1.jpg", "/cromoterapia_img2.jpg"],
      benefits: [
        "Equilíbrio dos chakras",
        "Harmonização energética",
        "Bem-estar emocional",
        "Relaxamento profundo"
      ]
    },
    {
      title: "Reiki com Sachês Aromáticos",
      subtitle: "Reiki + Aromaterapia",
      description: "Combinação única de Reiki com sachês aromáticos naturais, potencializando os benefícios energéticos através dos aromas terapêuticos.",
      duration: "~1h 15min",
      value: "Conforme plano especial",
      icon: <Flower size={40} />,
      images: ["/reiki_saches_img1.jpg", "/reiki_saches_img2.jpg", "/reiki_saches_img3.jpg"],
      benefits: [
        "Potencialização energética",
        "Aromaterapia terapêutica",
        "Relaxamento profundo",
        "Experiência sensorial única"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#F5F5F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-800 font-['Poppins'] mb-6">
            Nossos <span className="text-[#4C8A82]">Serviços</span>
          </h1>
          <p className="text-xl text-gray-600 font-['Open_Sans'] max-w-3xl mx-auto leading-relaxed">
            Terapias integrativas personalizadas para promover seu equilíbrio e bem-estar completo
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="text-[#4C8A82]">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 font-['Poppins']">
                        {service.title}
                      </h2>
                      <p className="text-lg text-[#4C8A82] font-['Open_Sans'] font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 font-['Open_Sans'] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <Star size={16} className="text-[#A8D5CD]" />
                        <span className="text-gray-700 font-['Open_Sans']">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Duration and Value */}
                  <div className="bg-[#F5F5F5] p-6 rounded-2xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Clock size={20} className="text-[#4C8A82]" />
                        <div>
                          <p className="text-sm text-gray-600 font-['Open_Sans']">Duração</p>
                          <p className="font-semibold text-gray-800 font-['Open_Sans']">
                            {service.duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star size={20} className="text-[#4C8A82]" />
                        <div>
                          <p className="text-sm text-gray-600 font-['Open_Sans']">Valor</p>
                          <p className="font-semibold text-gray-800 font-['Open_Sans']">
                            {service.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Carousel */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <ImageCarousel images={service.images} title={service.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Destaque */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-[#A8D5CD] to-[#4C8A82] rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="/consultorio3.jpg"
                  alt="Ambiente zen de terapia"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 font-['Poppins']">
                Nosso Compromisso
              </h2>
              <p className="text-xl text-gray-600 font-['Open_Sans'] leading-relaxed">
                Nosso compromisso é oferecer terapias integrativas que respeitam sua individualidade 
                e promovem equilíbrio integral em corpo, mente e energia.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Heart size={20} className="text-[#4C8A82]" />
                  <span className="text-gray-700 font-['Open_Sans']">Atendimento humanizado e personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles size={20} className="text-[#4C8A82]" />
                  <span className="text-gray-700 font-['Open_Sans']">Técnicas comprovadas e seguras</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star size={20} className="text-[#4C8A82]" />
                  <span className="text-gray-700 font-['Open_Sans']">Resultados duradouros e eficazes</span>
                </div>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="bg-[#4C8A82] hover:bg-[#3d6f68] text-white px-8 py-4 rounded-full text-lg font-['Open_Sans'] font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center space-x-3"
              >
                <MessageCircle size={24} />
                <span>Agendar Sessão no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;