import { motion } from "framer-motion"; // Para animações
import brigadeiro1 from "../assets/images/brigadeiro1.webp"
import brigadeiro2 from "../assets/images/brigadeiro2.jpg"
import brigadeiro3 from "../assets/images/brigadeiro3.jpg"
import brigadeiro4 from "../assets/images/brigadeiro4.png"
import brigadeiro5 from "../assets/images/brigadeiro5.jpg"
import brigadeiro6 from "../assets/images/brigadeiro6.jpg"

// Dados dos brigadeiros (pode ser substituído por dados reais posteriormente)
const brigadeiros = [
  {
    id: 1,
    nome: "Brigadeiro Tradicional",
    descricao: "O clássico brigadeiro de chocolate que todo mundo ama.",
    preco: "R$ 2,50",
    imagem: brigadeiro1, 
  },
  {
    id: 2,
    nome: "Brigadeiro de Morango",
    descricao: "Feito com morangos frescos e chocolate ao leite.",
    preco: "R$ 3,00",
    imagem: brigadeiro2, // Imagem genérica
  },
  {
    id: 3,
    nome: "Brigadeiro de Ninho",
    descricao: "Cremoso e delicioso, feito com leite Ninho.",
    preco: "R$ 3,00",
    imagem: brigadeiro3, // Imagem genérica
  },
  {
    id: 4,
    nome: "Brigadeiro de Café",
    descricao: "Perfeito para os amantes de café, com um toque especial.",
    preco: "R$ 3,50",
    imagem: brigadeiro4, // Imagem genérica
  },
  {
    id: 5,
    nome: "Brigadeiro de Paçoca",
    descricao: "A combinação perfeita de chocolate e paçoca.",
    preco: "R$ 3,00",
    imagem: brigadeiro5, // Imagem genérica
  },
  {
    id: 6,
    nome: "Brigadeiro de Limão",
    descricao: "Um toque cítrico e refrescante para surpreender.",
    preco: "R$ 3,50",
    imagem: brigadeiro6, // Imagem genérica
  },
];

const Brigadeiros = () => {
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
    <section id="brigadeiros" className="min-h-screen flex items-center justify-center bg-[#F9F0F0] py-12">
      <div className="container mx-auto text-center px-4">
        {/* Título com animação */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleAnimation}
          className="text-5xl font-bold text-[#772626] mb-12"
        >
          Cardápio
        </motion.h2>

        {/* Cards dos brigadeiros */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {brigadeiros.map((brigadeiro) => (
            <motion.div
              key={brigadeiro.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardAnimation}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              {/* Imagem do brigadeiro */}
              <img
                src={brigadeiro.imagem}
                alt={brigadeiro.nome}
                className="w-full h-48 object-cover"
              />

              {/* Detalhes do brigadeiro */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#772626] mb-2">
                  {brigadeiro.nome}
                </h3>
                <p className="text-[#772626] mb-4">{brigadeiro.descricao}</p>
                <p className="text-xl font-semibold text-[#C74040]">
                  {brigadeiro.preco}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brigadeiros;