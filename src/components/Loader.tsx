import { motion } from "framer-motion"; // Para animações

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#F9F0F0] bg-opacity-95 z-50">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Ícone de brigadeiro girando */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="text-6xl text-[#C74040]"
        >
          🍫
        </motion.div>

        {/* Texto de carregamento */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl text-[#772626] font-semibold"
        >
          Carregando...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader;