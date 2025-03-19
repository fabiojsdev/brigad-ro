import { useMemo, useRef } from "react";
import { FaArrowDown, FaWhatsapp, FaCookieBite } from "react-icons/fa"; // Ícones
import { motion } from "framer-motion"; // Framer Motion para animações

const Hero = () => {
  // Gera as posições e atrasos das bolinhas uma única vez
  const bubbles = useMemo(
    () =>
      Array.from({ length: 30 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        size: `${Math.random() * 20 + 10}px`, // Tamanho variável das bolinhas
      })),
    []
  );

  // Ref para a seção de brigadeiros
  const brigadeirosRef = useRef<HTMLDivElement>(null);

  // Função para rolar até a seção de brigadeiros
  const scrollToBrigadeiros = () => {
    if (brigadeirosRef.current) {
      brigadeirosRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animação de fade-in para o subtítulo
  const subtitleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  // Animação de fade-in para os botões
  const buttonsAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
  };

  // Animação do ícone e texto
  const iconAnimation = {
    hidden: { x: "100%", opacity: 0 }, // Começa fora da tela à direita
    visible: {
      x: 0, // Vai para a posição original
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
    exit: { x: "-100%", opacity: 0 }, // Sai pela esquerda
  };

  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center h-screen bg-gradient-to-b from-[#F9F0F0] to-[#E8B3B3] text-[#772626] text-center px-4 overflow-hidden"
    >
      {/* Título principal com ícone e texto */}
      <div className="flex items-center gap-4 overflow-hidden">
        {/* Ícone de brigadeiro com animação */}
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={iconAnimation}
          transition={{ repeat: Infinity, repeatDelay: 2, duration: 2 }} // Repete a cada 2 segundos
        >
          <FaCookieBite className="text-6xl md:text-7xl text-[#C74040]" />
        </motion.div>

        {/* Texto "Doces Dessa" com animação */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textAnimation}
          className="text-5xl md:text-6xl font-bold font-serif"
        >
          Brigadêro
        </motion.h1>
      </div>

      {/* Subtítulo */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={subtitleAnimation}
        className="text-xl md:text-2xl mb-8 max-w-2xl font-light mt-4"
      >
        Delicie-se com nossos brigadeiros feitos com amor e ingredientes de alta
        qualidade. Perfeitos para presentear ou saborear em qualquer ocasião!
      </motion.p>

      {/* Botões de ação */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={buttonsAnimation}
        className="flex gap-4"
      >
        <button
          onClick={scrollToBrigadeiros}
          className="flex items-center gap-2 bg-[#C74040] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#9F3333] transition-all cursor-pointer shadow-lg hover:shadow-xl"
          aria-label="Ver Sabores"
        >
          <span>Cardapio</span>
          <FaArrowDown className="animate-bounce" />
        </button>

        <a
          href="https://wa.me/seunumerodewhatsapp" // Substitua pelo seu número
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#28A745] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#218838] transition-all shadow-lg hover:shadow-xl"
          aria-label="Encomendar"
        >
          <span>Encomendar</span>
          <FaWhatsapp />
        </a>
      </motion.div>

      {/* Efeito das bolinhas no fundo */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className="absolute bg-[#E8B3B3] rounded-full opacity-50 animate-float"
            style={{
              top: bubble.top,
              left: bubble.left,
              width: bubble.size,
              height: bubble.size,
              animationDelay: bubble.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Referência para a seção de brigadeiros */}
      <div ref={brigadeirosRef}></div>
    </section>
  );
};

export default Hero;