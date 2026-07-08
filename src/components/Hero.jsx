export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-[linear-gradient(135deg,_#f7f1e8_0%,_#efe2d0_100%)] pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center rounded-[32px] border border-amber-950/10 bg-[#fcf8f2]/85 backdrop-blur-sm shadow-[0_25px_70px_-25px_rgba(120,53,15,0.25)] p-8 md:p-10 lg:p-14">
          <div className="max-w-xl">
            <span className="inline-block bg-[#e8d8c2] text-[#7a4a1d] px-4 py-1.5 rounded-full text-sm font-medium mb-5 border border-[#d8c1a4]">
              Z&K Utilidades
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#3f2d20] leading-tight tracking-tight">
              Tudo para sua casa em um só lugar.
            </h1>

            <p className="mt-6 text-lg text-[#6f5845] leading-relaxed">
              Encontre utensílios domésticos, organização, decoração, presentes
              e diversos produtos para facilitar seu dia a dia.
            </p>

            <a
              href="#categorias"
              className="inline-flex mt-8 items-center justify-center bg-[#6f482f] text-[#fffaf4] px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-[#6f482f]/25 hover:bg-[#5a3b28] transition duration-300"
            >
              Ver categorias
            </a>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-[#d7b98a]/40 to-transparent blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80"
                alt="Produtos para casa"
                className="relative rounded-[28px] shadow-[0_20px_60px_-20px_rgba(84,47,24,0.35)] w-full object-cover border border-[#d9c4a2]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
