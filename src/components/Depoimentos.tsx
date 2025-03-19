import { motion } from "framer-motion"; // Para animações

// Dados de depoimentos (pode ser substituído por dados reais posteriormente)
const depoimentos = [
  {
    id: 1,
    nome: "Ana Silva",
    foto: "https://via.placeholder.com/150", // Foto genérica
    texto:
      "Os brigadeiros da Doce Dessa são incríveis! Minha festa foi um sucesso graças a eles.",
  },
  {
    id: 2,
    nome: "Carlos Oliveira",
    foto: "https://via.placeholder.com/150", // Foto genérica
    texto:
      "Adorei a qualidade e o sabor dos brigadeiros. Recomendo para todos os eventos!",
  },
  {
    id: 3,
    nome: "Mariana Costa",
    foto: "https://via.placeholder.com/150", // Foto genérica
    texto:
      "Perfeitos para presentear! Meus amigos amaram os brigadeiros que comprei.",
  },
];

const Depoimentos = () => {
  // Animação de fade-in para o título
  const titleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  // Animação de fade-in para os cards
  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="depoimentos" className="min-h-screen flex items-center justify-center bg-[#F9F0F0] py-12">
      <div className="container mx-auto text-center px-4">
        {/* Título com animação */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleAnimation}
          className="text-5xl font-bold text-[#772626] mb-8"
        >
          Depoimentos
        </motion.h2>

        {/* Cards de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {depoimentos.map((depoimento) => (
            <motion.div
              key={depoimento.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardAnimation}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <img
                  src={depoimento.foto}
                  alt={depoimento.nome}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#C74040]"
                />
              </div>

              {/* Nome */}
              <h3 className="text-xl font-semibold text-[#772626] mb-2">
                {depoimento.nome}
              </h3>

              {/* Depoimento */}
              <p className="text-[#772626]">"{depoimento.texto}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;