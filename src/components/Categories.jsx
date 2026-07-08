import { ChefHat, Gift, House, Sparkles } from "lucide-react";

const categories = [
  {
    icon: <ChefHat size={34} />,
    title: "Cozinha",
    description:
      "Utensílios, panelas, potes e acessórios para facilitar o preparo das suas receitas.",
  },
  {
    icon: <House size={34} />,
    title: "Organização",
    description:
      "Caixas, organizadores e soluções práticas para manter sua casa sempre em ordem.",
  },
  {
    icon: <Gift size={34} />,
    title: "Presentes",
    description: "Opções criativas para presentear em qualquer ocasião.",
  },
  {
    icon: <Sparkles size={34} />,
    title: "Decoração",
    description: "Itens que deixam cada ambiente mais bonito e aconchegante.",
  },
];

export default function Categories() {
  return (
    <section id="categorias" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#7a4a1d] font-semibold uppercase tracking-wider">
            Categorias
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Encontre o que você procura
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Trabalhamos com diversos produtos para facilitar seu dia a dia,
            oferecendo qualidade, variedade e preços acessíveis.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#efe2d0] flex items-center justify-center text-[#7a4a1d] mb-6">
                {category.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {category.title}
              </h3>

              <p className="text-gray-600 leading-7">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
