import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Ruler, Truck, Hammer, Droplets, ArrowRight, MapPin, MessageCircle, Linkedin, Instagram, Layers, Cpu, Database } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/* IMAGENS LOCAIS */
import logo from './assets/logo.png';
import heroBg from './assets/hero-bg.jpg'; 
import imgSobre from './assets/sobre.jpg';
import imgArq from './assets/servico-arquitetura.jpg';
import imgTerra from './assets/servico-terraplanagem.jpg';
import imgPavi from './assets/servico-pavimentacao.jpg';
import imgDren from './assets/servico-drenagem.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);
  
  const phoneNumber = "553193355728";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento.`;
  
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/matheus-ribeiro-ab9360123",
    instagram: "https://www.instagram.com/matheus.infraengenharia/"
  };

  // Diferenciais Tecnológicos da EMPRESA
  const techs = [
    { name: "AutoCAD Civil 3D", icon: <Layers />, desc: "Modelagem BIM de Infraestrutura" },
    { name: "Dynamo", icon: <Cpu />, desc: "Automação de Processos e Cálculos" },
    { name: "HEC-RAS / HEC-HMS", icon: <Droplets />, desc: "Simulações Hidráulicas Complexas" },
    { name: "InfraWorks", icon: <Database />, desc: "Planejamento e Visualização 3D" }
  ];

  const services = [
    {
      id: "arquitetura",
      title: "Projetos & Consultoria",
      description: "Desenvolvimento de projetos executivos com foco em aprovação e viabilidade técnica. Especialista em compatibilização de projetos complementares.",
      icon: <Ruler className="w-6 h-6" />,
      image: imgArq
    },
    {
      id: "terraplanagem",
      title: "Terraplanagem Inteligente",
      description: "Cálculo preciso de volumes de corte e aterro utilizando Civil 3D, otimizando custos e garantindo a estabilidade geotécnica do terreno.",
      icon: <Truck className="w-6 h-6" />,
      image: imgTerra
    },
    {
      id: "pavimentacao",
      title: "Pavimentação",
      description: "Dimensionamento e execução de pavimentos rígidos e flexíveis, seguindo rigorosamente as NBRs para garantir durabilidade e tráfego seguro.",
      icon: <Hammer className="w-6 h-6" />,
      image: imgPavi
    },
    {
      id: "drenagem",
      title: "Drenagem Urbana",
      description: "Estudos de micro e macrodrenagem, bacias hidrográficas e prevenção de enchentes com modelagem hidráulica avançada.",
      icon: <Droplets className="w-6 h-6" />,
      image: imgDren
    }
  ];

  return (
    <div className="font-sans text-gray-200 bg-zinc-950 selection:bg-white selection:text-zinc-950 overflow-x-hidden">
      
      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        className="fixed bottom-6 right-6 z-[60] bg-green-600 !text-white p-4 rounded-full shadow-[0_0_20px_rgba(22,163,74,0.5)] hover:bg-green-500 hover:scale-110 transition duration-300 flex items-center justify-center border border-white/10 group animate-bounce-slow"
        title="Falar no WhatsApp"
        data-aos="fade-left"
      >
        <MessageCircle size={28} />
      </a>

      {/* HEADER */}
      <header className="fixed w-full top-0 z-50 bg-zinc-950/95 backdrop-blur-md border-b border-white/5 shadow-lg transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3" data-aos="fade-down" data-aos-delay="100">
            <img src={logo} alt="Logo Matheus Ribeiro" className="h-10 md:h-12 w-auto brightness-110" />
            <div className="hidden md:flex flex-col">
              <span className="font-bold text-lg leading-none tracking-wide text-white">ENG. MATHEUS RIBEIRO</span>
              <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">Infraestrutura & Drenagem</span>
            </div>
          </div>

          <nav className="hidden lg:flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest items-center" data-aos="fade-down" data-aos-delay="200">
            <a href="#home" className="hover:text-white transition-colors relative group">
              Início <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="hover:text-white transition-colors relative group">
              A Empresa <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#tech" className="hover:text-white transition-colors relative group">
              Tecnologia <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#services" className="hover:text-white transition-colors relative group">
              Serviços <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4" data-aos="fade-down" data-aos-delay="300">
            <div className="flex items-center gap-3 border-r border-white/10 pr-4">
              <a href={socialLinks.linkedin} target="_blank" className="text-gray-400 hover:text-[#0077b5] transition-colors hover:scale-110 transform duration-200"><Linkedin size={20} /></a>
              <a href={socialLinks.instagram} target="_blank" className="text-gray-400 hover:text-[#E1306C] transition-colors hover:scale-110 transform duration-200"><Instagram size={20} /></a>
            </div>
            
            <a href={whatsappLink} target="_blank" className="flex items-center gap-2 bg-white !text-zinc-950 px-4 py-2 rounded-md hover:bg-gray-200 transition font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              <Phone size={14} />
              <span>Contato</span>
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-6 shadow-2xl absolute w-full animate-fade-in-down">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white block">Início</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white block">A Empresa</a>
            <a href="#tech" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white block">Tecnologia</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white block">Serviços</a>
            <div className="flex gap-4 pt-4 border-t border-white/10">
              <a href={socialLinks.linkedin} className="text-white"><Linkedin /></a>
              <a href={socialLinks.instagram} className="text-white"><Instagram /></a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
              src={heroBg} 
              alt="Engenharia Background" 
              className="w-full h-full object-cover opacity-20 scale-105 animate-slow-zoom" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/60 to-zinc-950"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div 
            className="inline-block border border-white/10 bg-white/5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-blue-400 mb-8 backdrop-blur-sm uppercase"
            data-aos="fade-down"
          >
            Especialista em Drenagem e Infraestrutura
          </div>
          <h1 
            className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
            data-aos="zoom-in" 
            data-aos-delay="200"
          >
            Engenharia de <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Alta Performance.</span>
          </h1>
          <p 
            className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Soluções completas em projetos de infraestrutura, saneamento e pavimentação, utilizando automação e modelagem BIM para garantir segurança e eficiência.
          </p>
          
          <div 
            className="flex flex-col md:flex-row gap-4 justify-center mt-8"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a 
              href={whatsappLink} 
              target="_blank" 
              className="bg-white !text-zinc-950 px-8 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              Solicitar Orçamento <ArrowRight size={18}/>
            </a>
            <a 
              href="#services" 
              className="border border-white/20 !text-white px-8 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-white hover:!text-zinc-950 transition-all duration-300 hover:border-white hover:-translate-y-1"
            >
              Conhecer Projetos
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE (Versão Corporativa) */}
      <section id="about" className="py-24 bg-zinc-900 border-t border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group" data-aos="fade-right">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-900 to-zinc-900 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <img 
              src={imgSobre} 
              alt="Engenheiro Matheus Ribeiro" 
              className="relative rounded-md shadow-2xl grayscale hover:grayscale-0 transition duration-700 w-full object-cover aspect-[4/3] border border-white/10"
            />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Solidez e Confiança</h2>
            <div className="w-24 h-1 bg-blue-500 mb-8"></div>
            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              A <strong>Eng. Matheus Ribeiro</strong> é um escritório especializado em soluções complexas de infraestrutura urbana. Nosso foco vai além do projeto: buscamos a inteligência técnica que gera economia na obra e segurança hídrica.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm mb-8">
              Atuamos com rigor técnico em drenagem, terraplanagem e pavimentação, utilizando softwares de última geração para simulações precisas. Nossa missão é entregar não apenas desenhos técnicos, mas a garantia de uma execução eficiente e sem imprevistos.
            </p>
            
            <div className="flex gap-4">
              <a href={socialLinks.linkedin} target="_blank" className="flex items-center gap-2 text-white border-b border-white/20 pb-1 hover:border-blue-500 transition hover:text-blue-400">
                <Linkedin size={18} className="text-blue-500"/> Visitar LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STACK TECNOLÓGICA */}
      <section id="tech" className="py-20 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-blue-500 uppercase tracking-widest text-xs font-bold">Inovação e Ferramentas</span>
            <h2 className="text-3xl font-bold text-white mt-2">Tecnologia Aplicada</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techs.map((tech, i) => (
              <div 
                key={i} 
                className="bg-zinc-900 p-6 rounded border border-white/5 hover:border-blue-500/50 transition duration-300 group hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition duration-300">{tech.icon}</div>
                <h3 className="text-white font-bold mb-2">{tech.name}</h3>
                <p className="text-gray-500 text-xs">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <div id="services" className="bg-zinc-950">
        <div className="py-24 text-center bg-zinc-950" data-aos="zoom-in">
          <span className="text-gray-500 uppercase tracking-[0.2em] text-xs font-bold">O que fazemos</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 tracking-tight">Áreas de Atuação</h2>
        </div>

        {services.map((service, index) => (
          <section key={index} className={`py-20 border-t border-white/5 overflow-hidden ${index % 2 === 0 ? 'bg-zinc-950' : 'bg-zinc-900'}`}>
            <div className="container mx-auto px-6">
              <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                <div 
                  className="w-full md:w-1/2 relative group"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-700 z-10 pointer-events-none"></div>
                  <div className="relative border border-white/10 rounded-md overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-[350px] md:h-[500px] object-cover rounded-md shadow-2xl grayscale group-hover:grayscale-0 transition duration-700 ease-in-out transform group-hover:scale-105"
                      />
                  </div>
                </div>

                <div 
                  className="w-full md:w-1/2"
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/5 rounded-md border border-white/10 text-white">
                      {service.icon}
                    </div>
                    <span className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">Especialidade</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{service.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10">
                    {service.description}
                  </p>
                  
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    className="group inline-flex items-center gap-3 !text-white font-bold uppercase tracking-wider text-sm border-b border-white/30 pb-2 hover:border-white transition-all hover:gap-5"
                  >
                    Cotar Projeto <ArrowRight size={16} className="text-white"/>
                  </a>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* FOOTER */}
      <footer id="contact" className="bg-zinc-950 pt-24 pb-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16" data-aos="fade-up">
            <div className="col-span-1 md:col-span-2">
              <span className="font-bold text-2xl text-white tracking-tighter block mb-4">ENG. MATHEUS RIBEIRO</span>
              <p className="text-gray-400 max-w-sm leading-relaxed text-sm mb-6">
                Especialista em drenagem e infraestrutura. Transformando dados técnicos em obras seguras e eficientes.
              </p>
              <div className="flex gap-4">
                <a href={socialLinks.linkedin} target="_blank" className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition text-gray-400 hover:-translate-y-1">
                  <Linkedin size={20} />
                </a>
                <a href={socialLinks.instagram} target="_blank" className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition text-gray-400 hover:-translate-y-1">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contato</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-center gap-3 hover:text-white transition">
                  <Phone size={16} />
                  <a href={whatsappLink} target="_blank" className="hover:text-white transition">+55 31 9335-5728</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} />
                  <span>Belo Horizonte, MG</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Links</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#home" className="hover:text-white transition block">Início</a></li>
                <li><a href="#about" className="hover:text-white transition block">Sobre</a></li>
                <li><a href="#tech" className="hover:text-white transition block">Tecnologia</a></li>
                <li><a href="#services" className="hover:text-white transition block">Serviços</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} Eng. Matheus Ribeiro. CREA-MG.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-1">
              Desenvolvido por <a href="https://github.com/raphaelyankous" target="_blank" className="text-gray-500 hover:text-white transition font-medium">Raphael Yankous</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;