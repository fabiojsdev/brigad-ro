import { motion } from "framer-motion"; // Framer Motion para animações

const SobreNos = () => {
  // Animação de fade-in para o título
  const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  // Animação de fade-in para o texto
  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  return (
    <section
      id="sobre-nos"
      className="min-h-screen flex items-center justify-center bg-[#F9F0F0] py-12"
    >
      <div className="container mx-auto text-center px-4">
        {/* Título com animação */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleAnimation}
          className="text-5xl font-bold text-[#772626] mb-6"
        >
          Sobre Nós
        </motion.h2>

        {/* Texto com animação */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textAnimation}
          className="text-xl text-[#772626] max-w-2xl mx-auto"
        >
          Somos apaixonados por brigadeiros artesanais e dedicamos nosso tempo
          para criar doces que encantam e trazem felicidade. Cada brigadeiro é
          feito com ingredientes de alta qualidade e muito amor.
        </motion.p>
      </div>
    </section>
  );
};

export default SobreNos;