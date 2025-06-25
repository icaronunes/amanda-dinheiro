import { Award, Book, Users } from "lucide-react";
import { Card } from "../ui/card";
import { NOMESITE } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Conheça a {NOMESITE}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma equipe dedicada a oferecer as melhores soluções
            financeiras com transparência, agilidade e foco total nas suas
            necessidades. Nossa missão é empoderar você a tomar decisões
            financeiras inteligentes e alcançar a estabilidade e prosperidade
            que merece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Minha Visão
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Sou referência de consultoria financeira independente, reconhecida
              pela construção de relações de confiança sólidas tanto com
              clientes quanto com parceiros bancários, oferecendo sempre uma
              soluções de crédito personalizadas e competitivas
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Nossos Valores
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  Confiança e Transparência
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  Foco no Cliente
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  Inovação Contínua
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  Ética e Responsabilidade
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quem sou eu Section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Quem sou eu
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 bg-white hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">
                Amanda Dias
              </h4>
              <p className="text-gray-600 font-medium mb-2">
                Sua ligação com o dinheiro
              </p>
              <p className="text-gray-600 text-sm">
                Apaixonada por finanças e ajudar pessoas a alcançarem seus
                sonhos. Com mais de 10 anos de experiência no mercado
                financeiro.
              </p>
            </Card>

            <Card className="text-center p-6 border-0 bg-white hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">
                Faculdade
              </h4>
              <p className="text-gray-600 font-medium mb-2">Na POLI</p>
              <p className="text-gray-600 text-sm">
                Formada em 2010 na turma de Engenharia de Produção da POLI, com
                especialização em Finanças.
              </p>
            </Card>

            <Card className="text-center p-6 border-0 bg-white hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-gray-900">
                Trabalhos Anteriores
              </h4>
              <p className="text-gray-600 font-medium mb-2">
                10 anos de experiência
              </p>
              <p className="text-gray-600 text-sm">
                Trabalhei muitos anos para a Tia Leila na Crefisa. Sai porque
                ela me explorava.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
