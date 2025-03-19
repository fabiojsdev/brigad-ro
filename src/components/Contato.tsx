import { motion } from "framer-motion"; // Para animações
import { FaWhatsapp } from "react-icons/fa"; // Ícone do WhatsApp

const Contato = () => {
  // Animação de fade-in para o título
  const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  // Animação de fade-in para o conteúdo
  const contentAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  return (
    <section id="contato" className="min-h-screen flex items-center justify-center bg-[#F9F0F0] py-12">
      <div className="container mx-auto text-center px-4">
        {/* Título com animação */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleAnimation}
          className="text-5xl font-bold text-[#772626] mb-12"
        >
          Contato
        </motion.h2>

        {/* Conteúdo dividido em duas colunas */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contentAnimation}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {/* Coluna do Formulário de E-mail */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#772626] mb-6">
              Envie uma Mensagem
            </h3>
            <form>
              {/* Campo Nome */}
              <div className="mb-6">
                <label htmlFor="nome" className="block text-left text-[#772626] font-semibold mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome"
                  className="w-full p-3 rounded-lg border border-[#C74040] focus:outline-none focus:ring-2 focus:ring-[#C74040]"
                  required
                />
              </div>

              {/* Campo E-mail */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-left text-[#772626] font-semibold mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Seu e-mail"
                  className="w-full p-3 rounded-lg border border-[#C74040] focus:outline-none focus:ring-2 focus:ring-[#C74040]"
                  required
                />
              </div>

              {/* Campo Mensagem */}
              <div className="mb-6">
                <label htmlFor="mensagem" className="block text-left text-[#772626] font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  placeholder="Sua mensagem"
                  rows={4}
                  className="w-full p-3 rounded-lg border border-[#C74040] focus:outline-none focus:ring-2 focus:ring-[#C74040]"
                  required
                />
              </div>

              {/* Botão de Enviar */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#C74040] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#9F3333] transition-all"
              >
                Enviar Mensagem
              </motion.button>
            </form>
          </div>

          {/* Coluna do Contato via WhatsApp */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#772626] mb-6">
              Fale Conosco pelo WhatsApp
            </h3>
            <div className="flex flex-col items-center gap-6">
              {/* Ícone do WhatsApp */}
              <div className="bg-[#25D366] p-6 rounded-full">
                <FaWhatsapp className="text-6xl text-white" />
              </div>

              {/* Texto de Descrição */}
              <p className="text-[#772626] text-lg">
                Clique no botão abaixo para iniciar uma conversa no WhatsApp.
              </p>

              {/* Botão do WhatsApp */}
              <motion.a
                href="https://wa.me/seunumerodewhatsapp" // Substitua pelo seu número
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#25D366] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#128C7E] transition-all"
              >
                <span>Conversar no WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contato;