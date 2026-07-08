import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#6f482f] text-[#fffaf4]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-3xl font-bold">
              Z<span className="text-gray-200">&</span>K
            </h2>

            <p className="mt-4 text-[#f3e4d3] leading-7">
              Tudo para sua casa em um só lugar. Produtos para cozinha,
              organização, decoração, presentes e muito mais.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Navegação</h3>

            <ul className="space-y-3">
              <li>
                <a href="#hero" className="hover:text-[#f3e4d3] transition">
                  Início
                </a>
              </li>

              <li>
                <a href="#sobre" className="hover:text-[#f3e4d3] transition">
                  Sobre
                </a>
              </li>

              <li>
                <a
                  href="#categorias"
                  className="hover:text-[#f3e4d3] transition"
                >
                  Categorias
                </a>
              </li>

              <li>
                <a href="#contato" className="hover:text-[#f3e4d3] transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Informações</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <span>Lavras - MG</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} />
                <span>(35) 3821-5833</span>
              </div>

              <a
                href="https://www.instagram.com/zekutilidades/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#f3e4d3] transition"
              >
                <span>@zekutilidades</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#a47c5d] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-[#f3e4d3]">
          <p>© 2026 Z&K Utilidades. Todos os direitos reservados.</p>

          <p>
            Desenvolvido por <span className="font-semibold">Leopoldo</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
