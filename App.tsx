import React, { useState, useEffect, useRef } from 'react';
import { PianoIcon, CheckIcon, LockIcon, MusicNoteIcon, PlayIcon, StarIcon, UsersIcon, ShieldIcon, GiftIcon } from './components/Icons';

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ type: "image" | "video"; src: string } | null>(null);

  // Obter o mês atual em português e capitalizar a primeira letra
  const currentMonth = new Date().toLocaleString('pt-BR', { month: 'long' }).replace(/^\w/, (c) => c.toUpperCase());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return prev;
      });
    }, 1000);

    // Scroll reveal animation
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observerRef.current?.observe(el));

    return () => {
      clearInterval(timer);
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-gold selection:text-black overflow-x-hidden">
      {/* Top Scarcity Bar */}
      <div className="bg-gold text-black py-2 text-center text-[10px] sm:text-xs font-black px-4 uppercase tracking-[0.2em] sticky top-0 z-50 shadow-xl">
        <span className="shimmer inline-block px-2">Vagas Limitadas: Turma de {currentMonth} 2026</span>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-12 pb-24">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] animate-float"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-gold font-black tracking-[0.3em] uppercase text-[10px] sm:text-sm mb-6 inline-flex items-center gap-2">
              <span className="h-px w-8 bg-gold/50"></span>
              Método Híbrido Exclusivo
              <span className="h-px w-8 bg-gold/50"></span>
            </h2>
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] mb-8 uppercase tracking-tighter fold-px-2">
              DESTRAVANDO AS TECLAS:<br/>
              <span className="text-gold italic block mt-4 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                O Guia prático do Zero ao tocar de ouvido
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-lg lg:text-lg max-w-2xl mx-auto mb-10 font-medium leading-relaxed px-4">
              Você sente que suas mãos travam na hora de mudar de acorde? Ou pior: se sente totalmente dependente de cifras e papéis para conseguir tocar qualquer música?
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={scrollToOffer}
                className="group relative bg-gold hover:bg-white text-black font-black py-4 px-10 sm:px-14 rounded-full text-lg lg:text-xl transition-all duration-500 shadow-[0_0_40px_rgba(212,175,55,0.3)] uppercase overflow-hidden"
              >
                <span className="relative z-10">Quero Destravar Agora</span>
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </button>
              
              <div className="flex items-center gap-6 text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                <span className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-gold" /> Acesso Imediato</span>
                <span className="flex items-center gap-2"><ShieldIcon className="w-4 h-4 text-gold" /> Risco Zero</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Hook Section */}
      <section className="py-20 bg-[#0a0a0c] relative">
        <div className="max-w-5xl mx-auto px-4 text-center reveal">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-black text-white mb-10 leading-tight uppercase">
            Chegou a hora de libertar o seu <span className="text-gold italic">potencial musical</span>.
          </h2>
          <div className="glass p-8 sm:p-12 lg:p-12 rounded-[2rem] border-white/5 shadow-2xl max-w-3xl mx-auto">
            <p className="text-gray-300 text-base sm:text-lg lg:text-lg mb-8 leading-relaxed">
              O e-book <span className="text-white font-bold">DESTRAVANDO AS TECLAS</span> não é apenas um manual de teoria, é o seu passaporte para a liberdade no teclado.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 border-t border-white/10 pt-8 mt-8">
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-black text-gold">18 ANOS</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">De Experiência</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/10"></div>
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-black text-gold">+2.5k</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Alunos Felizes</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/10"></div>
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-black text-gold">2026</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500">Versão Atualizada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Curriculum / Learning Path */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <p className="text-gold font-bold uppercase tracking-widest text-xs mb-4">O que você vai conquistar</p>
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-white mb-6 uppercase">O Guia para <span className="text-gold underline decoration-white/20">Destravar de Vez</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "O FIM DA 'MÃO TRAVADA'",
                desc: "Técnicas de dedilhado, escalas e exercícios práticos para dar agilidade e independência aos seus dedos.",
                icon: <LockIcon className="w-10 h-10" />,
                color: "from-gold/20 to-transparent"
              },
              {
                title: "HARMONIA QUE ENCANTA",
                desc: "Aprenda a usar acordes com 7ª e 9ª, inversões e acordes abertos que dão aquele som profissional e 'cheio'.",
                icon: <StarIcon className="w-10 h-10" />,
                color: "from-blue-500/10 to-transparent"
              },
              {
                title: "A LÓGICA DO OUVIDO",
                desc: "Entenda o Campo Harmônico e as Progressões mais usadas. Pare de decorar e comece a entender a estrutura.",
                icon: <MusicNoteIcon className="w-10 h-10" />,
                color: "from-purple-500/10 to-transparent"
              },
              {
                title: "SOLOS E IMPROVISO",
                desc: "Introdução à Pentatônica e Blues para você começar a criar seus próprios arranjos e solos com confiança.",
                icon: <PlayIcon className="w-10 h-10" />,
                color: "from-red-500/10 to-transparent"
              }
            ].map((item, idx) => (
              <div key={idx} className={`reveal bg-gradient-to-br ${item.color} border border-white/5 p-8 lg:p-10 rounded-[2rem] hover:border-gold/30 transition-all duration-500 group relative overflow-hidden`}>
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-100 transition-opacity">
                   {item.icon}
                </div>
                <h3 className="text-xl lg:text-xl font-black text-white mb-4 flex items-center gap-3">
                  <span className="text-gold">0{idx + 1}.</span> {item.title}
                </h3>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed group-hover:text-gray-200 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Hybrid Features */}
      <section className="py-20 bg-gold text-black relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 reveal">
              <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight uppercase">
                Por que este método é <span className="bg-black text-white px-2">exclusivo</span>?
              </h2>
              <p className="text-black/70 text-lg lg:text-lg mb-10 font-medium">
                Diferente de apostilas comuns, este é um Curso Híbrido que combina a leitura com a visualização prática.
              </p>
              
              <div className="space-y-6 lg:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white p-3 rounded-2xl"><PlayIcon className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-black text-lg lg:text-lg uppercase">14 Vídeo Aulas</h4>
                    <p className="text-black/60 font-medium text-sm lg:text-base">Explicação visual e prática de cada capítulo.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white p-3 rounded-2xl"><UsersIcon className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-black text-lg lg:text-lg uppercase">Linguagem Acessível</h4>
                    <p className="text-black/60 font-medium text-sm lg:text-base">Sem "tecniquês" chato. Foco no que funciona.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-black text-white p-3 rounded-2xl"><StarIcon className="w-6 h-6" /></div>
                  <div>
                    <h4 className="font-black text-lg lg:text-lg uppercase">Do Zero ao Intermediário</h4>
                    <p className="text-black/60 font-medium text-sm lg:text-base">Uma trilha lógica para quem quer evoluir de verdade.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 reveal">
              <div className="relative max-w-sm mx-auto lg:max-w-none">
                <div className="absolute -inset-4 bg-black/5 rounded-[3rem] rotate-3"></div>
                <div className="relative bg-black p-4 rounded-[3rem] shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=800" 
                    alt="Piano" 
                    className="rounded-[2.5rem] grayscale w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gold/10 mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-3xl font-black text-white mb-12 uppercase reveal">Este Guia é para você que:</h2>
          <div className="space-y-4 reveal max-w-2xl mx-auto">
            {[
              "Quer tocar na igreja, em bandas ou com amigos com segurança.",
              "Sente que toca de forma 'robótica' e quer um som mais fluido.",
              "Deseja entender a música para tirar canções ouvindo.",
              "Precisa de um método que respeite o seu tempo."
            ].map((item, idx) => (
              <div key={idx} className="glass p-5 lg:p-5 rounded-2xl flex items-center gap-4 text-left border-white/5 hover:border-gold/30 transition-all group">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all flex-shrink-0">
                  <CheckIcon className="w-5 h-5" />
                </div>
                <span className="text-gray-300 font-bold text-sm sm:text-lg">{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-gold italic text-lg lg:text-lg font-light opacity-80 reveal">
            "A música não precisa ser um mistério. As teclas estão esperando por você."
          </p>
        </div>
      </section>

      {/* prof Section (Daiane Corrêa) */}
      <section className="py-20 bg-[#0a0a0c] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2 reveal">
            <div className="relative inline-block">
              <div className="absolute -inset-6 bg-gold opacity-10 rounded-full blur-[80px]"></div>
              <img 
                src="https://f29110a8fda2ae3c6dd5d821c0100090.cdn.bubble.io/f1771459451270x349145945180657100/WhatsApp%20Image%202026-02-18%20at%2020.29.31.jpeg?_gl=1*1060rtt*_gcl_au*MTM2MzUxOTc0NS4xNzcwMTM1Njg1*_ga*MjAwMjIwNjE3Ny4xNzU0MzI5MTk0*_ga_BFPVR2DEE2*czE3NzE0NTY2NzYkbzk1JGcxJHQxNzcxNDU5NDIwJGo1OSRsMCRoMA.." 
                alt="Profª Daiane Corrêa" 
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-gold grayscale-0 relative z-10 mx-auto"
              />
              <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-gold text-black font-black py-2 px-6 rounded-full text-xs uppercase z-20 shadow-xl">
                Fundadora
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 reveal">
            <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] lg:text-xs mb-4">Conheça sua mentora</h4>
            <h2 className="text-4xl lg:text-4xl font-black text-white mb-8 uppercase">Profª Daiane Corrêa</h2>
            <div className="space-y-6 text-gray-400 text-base lg:text-base leading-relaxed font-medium">
              <p>
                Com mais de <span className="text-white font-bold">18 anos de experiência</span> no palco e na sala de aula, Daiane transformou sua paixão pela música em um método direto, focado na prática e no resultado imediato.
              </p>
              <p>
                Sua missão é provar que tocar teclado de ouvido não é um dom místico, mas uma habilidade que qualquer pessoa pode desenvolver com o guia certo.
              </p>
              <p>
                "Meu método não ensina apenas a apertar teclas, ele ensina você a <span className="text-gold">sentir a música</span>."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
<section className="py-20 bg-[#050505] overflow-hidden">
  <div className="max-w-6xl mx-auto px-4">

    <div className="text-center mb-16 reveal">
      <h2 className="text-3xl lg:text-4xl font-black text-white uppercase">
        Quem já <span className="text-gold">destravou</span> aprova:
      </h2>
    </div>

    <TestimonialCarousel setSelectedImage={setSelectedImage} />

  </div>
</section>


      {/* The Offer Section */}
      <section id="offer" className="py-20 bg-[#050505] relative overflow-hidden">
        {/* Lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gold/10 rounded-full blur-[180px] opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="reveal glass p-8 sm:p-14 lg:p-16 rounded-[3rem] border-gold/30 shadow-[0_0_80px_rgba(212,175,55,0.1)] max-w-2xl mx-auto">
            <div className="inline-block bg-red-600 text-white font-black px-6 py-2 rounded-full text-[10px] lg:text-[10px] mb-8 animate-pulse uppercase tracking-[0.2em]">
              Promoção de Lançamento 2026
            </div>
            
            <h3 className="text-2xl sm:text-4xl lg:text-4xl font-black text-white mb-2 uppercase tracking-tighter">DESTRAVANDO AS TECLAS</h3>
            <p className="text-gold font-bold mb-12 uppercase tracking-widest text-[10px] lg:text-[10px]">Guia Digital + Vídeo Aulas Exclusivas</p>
            
            <div className="mb-12">
              <span className="text-gray-500 line-through text-lg lg:text-xl font-medium opacity-50">De R$ 497,00</span>
              <div className="flex flex-col items-center mt-4">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter fold-text-xs">
                  <span className="text-2xl lg:text-3xl align-top mr-1">R$</span>29,90
                </span>
                <span className="text-gold font-black text-lg lg:text-xl mt-4 uppercase tracking-tighter">Pagamento Único</span>
              </div>
            </div>

            <a 
              href="https://pay.kiwify.com.br/H0I5Sq4"
              className="w-full max-w-sm mx-auto bg-gold hover:bg-white text-black font-black py-4 lg:py-5 rounded-full text-lg lg:text-xl transition-all duration-500 shadow-[0_0_50px_rgba(212,175,55,0.3)] uppercase mb-10 group overflow-hidden relative block no-underline text-center"
            >
              <span className="relative z-10">Quero Começar Agora!</span>
              <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </a>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-[10px] lg:text-[10px] text-gray-400 font-bold uppercase tracking-widest max-w-md mx-auto">
              <div className="flex flex-col items-center gap-2">
                <CheckIcon className="w-5 h-5 text-gold" /> Acesso Vitalício
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShieldIcon className="w-5 h-5 text-gold" /> 7 Dias Garantia
              </div>
              <div className="flex flex-col items-center gap-2 col-span-2 sm:col-span-1">
                <PlayIcon className="w-5 h-5 text-gold" /> 14 Vídeo Aulas
              </div>
            </div>
          </div>

          <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-12 reveal">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1 font-bold">A oferta termina em:</p>
              <p className="text-3xl lg:text-3xl font-black text-white font-mono">
                {timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, '0')}
              </p>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/10"></div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-full border border-white/10">
                <ShieldIcon className="w-8 h-8 text-gold" />
              </div>
              <div className="text-left">
                <p className="font-black text-white uppercase text-xs lg:text-xs">Garantia Total</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Satisfeito ou seu dinheiro de volta.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#050505]">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl lg:text-3xl font-black text-white text-center mb-16 uppercase reveal">Dúvidas <span className="text-gold">Comuns</span></h2>
          <div className="space-y-4 lg:space-y-4 reveal">
            {[
              { q: "O acesso é imediato?", a: "Sim! Pagamento aprovado, acesso liberado no seu e-mail na hora." },
              { q: "Preciso de teclado caro?", a: "Não. Qualquer teclado simples serve para começar os exercícios." },
              { q: "Nunca toquei nada?", a: "Perfeito. O método foi desenhado exatamente para te levar do zero absoluto." },
              { q: "E se eu me arrepender?", a: "Você tem 7 dias. Se não gostar, devolvemos tudo. Sem perguntas." }
            ].map((faq, idx) => (
              <details key={idx} className="group glass rounded-2xl overflow-hidden border-white/5">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-black text-xs sm:text-base lg:text-base uppercase tracking-tight text-white select-none">
                  {faq.q}
                  <span className="text-gold group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-6 pb-6 text-gray-400 font-medium leading-relaxed text-sm lg:text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 bg-[#0a0a0c] text-center border-t border-white/5">
        <div className="max-w-2xl mx-auto px-4 reveal">
          <h2 className="text-xl lg:text-xl font-black text-white mb-6 italic uppercase tracking-widest">Ainda tem dúvidas?</h2>
          <p className="text-gray-500 mb-10 uppercase text-[10px] lg:text-[10px] tracking-widest font-bold">A música não pode esperar.</p>
          <a 
            href="https://wa.me/5521992995676?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20M%C3%A9todo%20Destrave%20o%20Teclado%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20para%20come%C3%A7ar%20hoje." 
            className="inline-flex items-center gap-4 bg-[#25D366] text-white font-black py-4 lg:py-4 px-8 lg:px-10 rounded-full shadow-2xl hover:scale-105 transition-all text-xs sm:text-base lg:text-base uppercase tracking-widest"
          >
            Falar com a Daiane no WhatsApp
          </a>
        </div>
      </section>

      {/* Final Footer */}
      <footer className="bg-[#050505] py-16 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10 inline-block p-4 bg-white/5 rounded-full">
             <PianoIcon className="w-10 h-10 lg:w-10 lg:h-10 text-gold opacity-50" />
          </div>
          <p className="text-gray-500 text-[9px] lg:text-[9px] font-black mb-4 uppercase tracking-[0.5em]">
            DESTRAVANDO AS TECLAS — POR PROFª DAIANE CORRÊA
          </p>
          <p className="text-gray-700 text-[8px] lg:text-[8px] max-w-lg mx-auto leading-relaxed uppercase tracking-widest font-bold">
            © 2026 Direitos Reservados. Resultados dependem da dedicação e prática constante.
          </p>
        </div>
      </footer>
      {selectedImage && (
  <div
    className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="relative max-w-4xl w-full"
      onClick={(e) => e.stopPropagation()}
    >
      {selectedImage.type === "video" ? (
        <video
          src={selectedImage.src}
          controls
          autoPlay
          className="w-full max-h-[90vh] rounded-2xl shadow-2xl"
        />
      ) : (
        <img
          src={selectedImage.src}
          alt="Depoimento ampliado"
          className="w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
        />
      )}

      <button
        onClick={() => setSelectedImage(null)}
        className="absolute -top-4 -right-4 bg-white text-black w-10 h-10 rounded-full font-bold shadow-lg hover:scale-110 transition"
      >
        ✕
      </button>
    </div>
  </div>
)}

    </div>
  );
};

interface CarouselProps {
  setSelectedImage: (media: { type: "image" | "video"; src: string } | null) => void;
}

const TestimonialCarousel: React.FC<CarouselProps> = ({ setSelectedImage }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials: { type: "image" | "video"; src: string }[] = [
    {
      type: "video",
      src: "https://f29110a8fda2ae3c6dd5d821c0100090.cdn.bubble.io/f1771469967314x469122239150563400/WhatsApp%20Video%202026-02-18%20at%2023.23.36.mp4"
    },
    {
      type: "image",
      src: "https://f29110a8fda2ae3c6dd5d821c0100090.cdn.bubble.io/f1771469973895x856886521966829300/WhatsApp%20Image%202026-02-18%20at%2023.17.35.jpeg"
    },
    {
      type: "image",
      src: "https://f29110a8fda2ae3c6dd5d821c0100090.cdn.bubble.io/f1771469978245x495898411482096800/WhatsApp%20Image%202026-02-18%20at%2023.17.36.jpeg"
    },
    {
      type: "image",
      src: "https://f29110a8fda2ae3c6dd5d821c0100090.cdn.bubble.io/f1771469995056x574195269163083140/WhatsApp%20Image%202026-02-18%20at%2023.17.36%20%281%29.jpeg"
    },
    {
      type: "image",
      src: "https://f29110a8fda2ae3c6dd5d821c0100090.cdn.bubble.io/f1771470000132x818023684434960400/WhatsApp%20Image%202026-02-18%20at%2023.17.38.jpeg"
    },
    {
      type: "image",
      src: "https://f29110a8fda2ae3c6dd5d821c0100090.cdn.bubble.io/f1771470004718x354296630320439100/WhatsApp%20Image%202026-02-18%20at%2023.17.37%20%281%29.jpeg"
    },
    {
      type: "image",
      src: "https://f29110a8fda2ae3c6dd5d821c0100090.cdn.bubble.io/f1771470008563x513310201521079550/WhatsApp%20Image%202026-02-18%20at%2023.17.37.jpeg"
    },
    {
      type: "image",
      src: "https://f29110a8fda2ae3c6dd5d821c0100090.cdn.bubble.io/f1771470015374x407947825324288060/WhatsApp%20Image%202026-02-18%20at%2023.17.36%20%282%29.jpeg"
    }
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative">

      {/* Botão esquerda */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-gold text-white hover:text-black w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
      >
        ‹
      </button>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth px-14 no-scrollbar"
      >
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(item)}
            className="min-w-[250px] sm:min-w-[250px] md:min-w-[250px] lg:min-w-[250px] glass rounded-[2rem] overflow-hidden group cursor-pointer relative transition-transform duration-500 hover:scale-20"
          >
            {item.type === "video" ? (
              <>
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    ▶
                  </div>
                </div>
              </>
            ) : (
              <img
                src={item.src}
                alt={`Depoimento ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Botão direita */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-gold text-white hover:text-black w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-lg"
      >
        ›
      </button>
    </div>
  );
};


export default App;