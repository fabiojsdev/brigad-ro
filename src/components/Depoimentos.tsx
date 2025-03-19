import { motion } from "framer-motion"; // Para animações
import { FaStar, FaStarHalfAlt } from "react-icons/fa"; // Ícones de estrelas
import person1 from "../assets/images/person1.jpg";
import person2 from "../assets/images/person2.jpg";
import person3 from "../assets/images/person3.jpg";

// Tipo para os dados de depoimentos
interface Depoimento {
  id: number;
  nome: string;
  foto: string;
  texto: string;
  nota: number; // Nota de 1 a 5
}

// Dados de depoimentos (pode ser substituído por dados reais posteriormente)
const depoimentos: Depoimento[] = [
  {
    id: 1,
    nome: "Ana Silva",
    foto: person1, // Foto genérica
    texto: "Os brigadeiros da Doce Dessa são incríveis! Minha festa foi um sucesso graças a eles.",
    nota: 5, // Nota de 1 a 5
  },
  {
    id: 2,
    nome: "Carlos Oliveira",
    foto: person2, // Foto genérica
    texto: "Adorei a qualidade e o sabor dos brigadeiros. Recomendo para todos os eventos!",
    nota: 4.5, // Nota de 1 a 5
  },
  {
    id: 3,
    nome: "João Alves",
    foto: person3, // Foto genérica
    texto: "Perfeitos para presentear! Meus amigos amaram os brigadeiros que comprei.",
    nota: 4, // Nota de 1 a 5
  },
];

// Props do componente de avaliação por estrelas
interface AvaliacaoProps {
  nota: number;
}

// Componente de avaliação por estrelas
const Avaliacao: React.FC<AvaliacaoProps> = ({ nota }) => {
  const estrelasCheias = Math.floor(nota); // Número de estrelas cheias
  const temMeiaEstrela = nota % 1 !== 0; // Verifica se há meia estrela
  const estrelasVazias = 5 - estrelasCheias - (temMeiaEstrela ? 1 : 0); // Número de estrelas vazias

  return (
    <div className="flex justify-center gap-1 text-[#C74040]">
      {/* Estrelas cheias */}
      {[...Array(estrelasCheias)].map((_, index) => (
        <FaStar key={`cheia-${index}`} className="text-xl" />
      ))}
      {/* Meia estrela */}
      {temMeiaEstrela && <FaStarHalfAlt className="text-xl" />}
      {/* Estrelas vazias */}
      {[...Array(estrelasVazias)].map((_, index) => (
        <FaStar key={`vazia-${index}`} className="text-xl text-gray-300" />
      ))}
    </div>
  );
};

const Depoimentos: React.FC = () => {
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

              {/* Avaliação por estrelas */}
              <div className="mb-4">
                <Avaliacao nota={depoimento.nota} />
              </div>

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