import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Ícone de seta para cima
import { motion } from "framer-motion"; // Para animações

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Verifica a posição da página para mostrar ou esconder o botão
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Rola a página para o topo suavemente
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Adiciona um listener para o evento de scroll
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 left-6 z-50" // Alterado para left-6
    >
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#C74040] text-white p-4 rounded-full shadow-lg hover:bg-[#9F3333] transition-all"
          aria-label="Voltar ao topo"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}
    </motion.div>
  );
};

export default ScrollToTopButton;