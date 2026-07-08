import { Clock3, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-[#7a4a1d] font-semibold uppercase tracking-wider">
            Contato
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Venha nos visitar
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Estamos prontos para receber você com uma grande variedade de
            produtos e um atendimento de qualidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="flex items-start gap-4 mb-8">
              <MapPin className="text-[#7a4a1d] mt-1" size={26} />

              <div>
                <h3 className="font-semibold text-lg">Endereço</h3>
                <p className="text-gray-600 mt-1">
                  Rua Dr. Francisco Sales, 449
                  <br />
                  Centro - Lavras/MG
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <Phone className="text-[#7a4a1d] mt-1" size={26} />

              <div>
                <h3 className="font-semibold text-lg">Telefone</h3>
                <p className="text-gray-600 mt-1">(35) 3821-5833</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <Clock3 className="text-[#7a4a1d] mt-1" size={26} />

              <div>
                <h3 className="font-semibold text-lg">
                  Horário de funcionamento
                </h3>

                <p className="text-gray-600 mt-1">
                  Segunda a Sexta
                  <br />
                  08:00 às 18:00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div>
                <h3 className="font-semibold text-lg">Instagram</h3>

                <a
                  href="https://www.instagram.com/zekutilidades/"
                  target="_blank"
                  className="text-[#7a4a1d] hover:underline"
                >
                  @zekutilidades
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm min-h-[420px]">
            <iframe
              title="Mapa Z&K Utilidades"
              src="https://www.google.com/maps?q=Rua%20Dr.%20Francisco%20Sales%20449%20Lavras%20MG&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
