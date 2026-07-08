export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=900&q=80"
              alt="Interior de uma loja"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <span className="text-[#7a4a1d] font-semibold uppercase tracking-wider">
              Sobre nós
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Variedade, qualidade e praticidade para o seu dia a dia.
            </h2>

            <p className="text-gray-600 mt-6 leading-8">
              A Z&K Utilidades oferece uma grande variedade de produtos para
              facilitar sua rotina. Aqui você encontra itens para cozinha,
              organização, decoração, presentes e muito mais, sempre com preços
              acessíveis e um atendimento atencioso.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">
              <div className="bg-gray-100 rounded-xl p-5">
                <h3 className="text-3xl font-bold text-[#7a4a1d]">+1000</h3>
                <p className="text-gray-600 mt-1">Produtos disponíveis</p>
              </div>

              <div className="bg-gray-100 rounded-xl p-5">
                <h3 className="text-3xl font-bold text-[#7a4a1d]">
                  Atendimento
                </h3>
                <p className="text-gray-600 mt-1">Qualidade e confiança</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
