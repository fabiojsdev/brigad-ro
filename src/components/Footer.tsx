import { FaCookieBite } from "react-icons/fa"; // Ícone de doce mordido

const Footer = () => {
  return (
    <footer className="bg-[#772626] text-white py-4">
      {/* Fundo marsala escuro */}
      <div className="container mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-base">
          Desenvolvido com <FaCookieBite className="text-[#E8B3B3]" /> por
          <a
            href="https://connectionstree.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E8B3B3] hover:text-[#F9F0F0] transition-all"
          >
            Connections Tree
          </a>
        </p>
        <p className="mt-1 text-xs text-[#E8B3B3]">
          &copy; {new Date().getFullYear()} Doces Dessa. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;