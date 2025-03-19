import { FaWhatsapp } from "react-icons/fa"; // Ícone do WhatsApp
import { motion } from "framer-motion"; // Para animações

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/seunumerodewhatsapp" // Substitua pelo seu número
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all"
      whileHover={{ scale: 1.1 }} // Animação ao passar o mouse
      whileTap={{ scale: 0.9 }} // Animação ao clicar
      aria-label="Encomendar pelo WhatsApp"
    >
      <FaWhatsapp className="text-3xl" /> {/* Ícone do WhatsApp */}
    </motion.a>
  );
};

export default WhatsAppButton;