import React, { useState, useEffect } from 'react';
import { MessageCircle, CheckCircle, User, Shield, Sparkles, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5592991270700?text=Olá! Gostaria de agendar uma sessão de terapia energética.', '_blank');
  };

  const testimonials = [
    {
      name: "Viviane Meaza Bemergui",
      age: 41,
      photo: "/cliente1.jpg",
      text: "Você é um excelente terapeuta!!!!! Escuta com o coração, vai na raiz das dores 🌱 e me ajuda a respirar no meio da correria da vida 🚀.  Válvula de escape ativada! 💆‍♀✨.  Gratidão, Sani! 🙏💛"
    },
    {
      name: "Erika Gontijo",
      age: 53,
      photo: "/cliente2.jpg",
      text: "Percebo que fazendo com regularidade as sessões das técnicas aplicadas pelo Sani eu fico mais calma, com o corpo e a mente mais tranquilos. Me desacelera!"
    },
    {
      name: "João Carlos da Silva",
      age: 60,
      photo: "/cliente3.jpg",
      text: "A experiência com as terapias integrativas como Reiki e Acupuntura foi transformadora na minha vida, pois como portador de doença autoimune encontrei equilíbrio, bem-estar e uma nova forma de olhar para minha saúde. O atendimento é acolhedor, cuidadoso e totalmente personalizado. Recomendo a todos que buscam mais qualidade de vida e harmonia interior."
    },
    {
      name: "Jardilina G. do Amaral",
      age: 66,
      photo: "/cliente4.jpg",
      text: "Meu Terapeuta tem sido uma pessoa que tem me ajudado muito, tanto no campo da saúde física quanto a mental, as dores que tanto me incomodavam graças a Deus, diminuíram consideravelmente, e outras desapareceram. Na parte mental eu fiquei muito bem graças a Deus. Aconselho que experimente , eu me sinto muito bem com o tratamento.O Sani é um ótimo profissional."
    },
    {
      name: "Fernanda Versiani",
      age: 44,
      photo: "/cliente5.jpg",
      text: "Conheço o Sani a mais de 10 anos. Foi através do Sani que cheguei até as Práticas Integrativas sendo atendida com a Acupuntura, Reiki e auriculoterapia. Foi um divisor de águas na minha saúde.  Foi onde consegui o equilíbrio necessário para melhora da minha saúde física e mental,  me libertando da necessidade de medicamentos."
    }
  ];

  // Estados para carrossel de depoimentos
  const [currentTestimonial, setCurrentTestimonial] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 25000); // Muda automaticamente a cada 25 segundos

    return () => clearInterval(interval);
  }, [testimonials.length]);

   useEffect(() => {
    const setRealVh = () => {
      document.documentElement.style.setProperty('--real-vh', `${window.innerHeight * 0.01}px`);
    };
    setRealVh();
    window.addEventListener('resize', setRealVh);
    return () => window.removeEventListener('resize', setRealVh);
  }, []);



  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - Carrossel de Imagens */}
            <section className="relative h-[calc(var(--real-vh)*60)] md:h-[calc(var(--real-vh)*100)] flex items-center justify-center overflow-hidden">
        {/* Container do vídeo de fundo */}
        <div className="absolute inset-0 overflow-hidden bg-[#bde5d6]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/sani1.jpg"
            className="absolute w-full h-full object-contain"

            style={{ zIndex: 0 }}

            onError={(e) => console.error('background video error', e)}
            onCanPlay={() => console.log('background video can play')}
          >
            <source src="/background_video.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>
          {/* Overlay escuro para melhor legibilidade do texto */}
          <div className="absolute inset-0 bg-black bg-opacity-40" style={{ zIndex: 1 }}></div>
        </div>


        {/* Conteúdo do banner */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Poppins'] leading-tight drop-shadow-lg">
            Saúde e bem-estar<br />
            <span className="text-[#A8D5CD]">de dentro para fora</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-['Open_Sans'] leading-relaxed drop-shadow-md">
            Terapias integrativas que respeitam sua individualidade <br /> e promovem equilíbrio integral
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-[#4C8A82] hover:bg-[#3d6f68] text-white px-8 py-4 rounded-full text-lg font-['Open_Sans'] font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center space-x-3 mx-auto"
          >
            <MessageCircle size={24} />
            <span>Agende sua sessão agora</span>
          </button>
        </div>

      </section>

      {/* Sobre Mim */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 font-['Poppins']">
                Sobre o Terapeuta
              </h2>
              <p className="text-lg text-gray-600 font-['Open_Sans'] leading-relaxed">
                <strong>Educador Físico</strong>, formado pela Universidade do Amazonas 1989, atuação em escolas estaduais,
                municipais, particulares e universidade. <br />  Pós graduação em Metodologia do Ensino pelo C.E. La Salle de Ensino Superior. <br />
              </p>
              <p className="text-lg text-gray-600 font-['Open_Sans'] leading-relaxed">
                <strong> Terapeuta Energético desde 2000.</strong> <br /> Formação em Acupuntura, Reiki 1, 2, 3A e 3B - Master Reiki, Massoterapia Oriental, Auriculoterapia, Bioenergética, Acupuntura Eletrônica, Acupuntura Facial, Shiatsu Express, Quiroacupuntura, Pulsologia Energética, Crânio Acupuntura, Dry Needling,  Laserpuntura Integrativa, Laser Led do Iniciante ao Avançado - ILIB,  Sistema Método Equilíbrio Base.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 text-[#4C8A82]">
                  <CheckCircle size={20} />
                  <span className="font-['Open_Sans']">Formação Universitária</span>
                </div>
                <div className="flex items-center space-x-2 text-[#4C8A82]">
                  <CheckCircle size={20} />
                  <span className="font-['Open_Sans']">Especialista em Terapias Energéticas</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-[#A8D5CD] to-[#4C8A82] rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="/sani1.jpg"
                  alt="Terapeuta em sessão"
                  className="w-full max-h-[450px] object-contain rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 font-['Poppins'] mb-4">
              Por que escolher Sani Terapia?
            </h2>
            <p className="text-xl text-gray-600 font-['Open_Sans']">
              Cuidado integral com técnicas seguras e personalizadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <User size={40} />,
                title: "Atendimento personalizado",
                description: "Conhecendo sua história para respeitar suas necessidades reais."
              },
              {
                icon: <Shield size={40} />,
                title: "Terapias Energéticas",
                description: "Promovem autocura de forma consciente e natural."
              },
              {
                icon: <Sparkles size={40} />,
                title: "Olhar integral para Corpo, Mente e Espírito",
                description: "Visão holística considerando todos os aspectos para gerar Bem-Estar."
              },
              {
                icon: <Heart size={40} />,
                title: "Terapias integradas para harmonização",
                description: "Desacelerar, relaxar, amenizar dores Físicas e Emocionais."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center"
              >
                <div className="text-[#4C8A82] mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 font-['Poppins']">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-['Open_Sans'] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos - Carrossel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 font-['Poppins'] mb-4">
              O que dizem nossos clientes
            </h2>
            <p className="text-xl text-gray-600 font-['Open_Sans']">
              Experiências reais de transformação e bem-estar
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Carrossel Container */}
            <div className="bg-[#F5F5F5] rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
              {/* Botões de navegação */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-[#4C8A82] p-3 rounded-full shadow-lg transition-all z-10"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-[#4C8A82] p-3 rounded-full shadow-lg transition-all z-10"
              >
                <ChevronRight size={24} />
              </button>

              {/* Conteúdo do depoimento */}
              <div className="text-center px-12">
                <div className="mb-8">
                  <img
                    src={testimonials[currentTestimonial].photo}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-26 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                  />
                  <h3 className="text-xl font-semibold text-[#4C8A82] font-['Poppins'] mb-1">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-gray-500 font-['Open_Sans']">
                    {testimonials[currentTestimonial].age} anos
                  </p>
                </div>

                <p className="text-gray-700 font-['Open_Sans'] leading-relaxed text-lg italic mb-6">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>

              {/* Indicadores */}
              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentTestimonial
                      ? 'bg-[#4C8A82] scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada Final */}
      <section className="py-20 bg-gradient-to-r from-[#4C8A82] to-[#A8D5CD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white font-['Poppins'] mb-6">
            Quer cuidar do seu corpo e da sua energia?
          </h2>
          <p className="text-xl text-white opacity-90 font-['Open_Sans'] mb-8 leading-relaxed">
            Entre em contato agora pelo WhatsApp e agende sua sessão!
            Transforme sua vida com terapias que realmente funcionam.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-[#4C8A82] px-8 py-4 rounded-full text-lg font-['Open_Sans'] font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center space-x-3 mx-auto hover:shadow-xl"
          >
            <MessageCircle size={24} />
            <span>Chamar no WhatsApp</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;