import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Para animações
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contato from "./components/Contato";
import Brigadeiros from "./components/Brigadeiros";
import Depoimentos from "./components/Depoimentos";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Loader from "./components/Loader";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Novo componente

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simula um tempo de carregamento
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 segundos de carregamento
    return () => clearTimeout(timer);
  }, []);

  // Animação de transição para as seções
  const sectionAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionAnimation}
          >
            <Hero />
          </motion.section>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionAnimation}
          >
            <Brigadeiros />
          </motion.section>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionAnimation}
          >
            <Depoimentos />
          </motion.section>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionAnimation}
          >
            <Contato />
          </motion.section>
          <Footer />
          <WhatsAppButton />
          <ScrollToTopButton /> {/* Botão "Voltar ao Topo" */}
        </>
      )}
    </>
  );
}

export default App;