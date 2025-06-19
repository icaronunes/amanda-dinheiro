import { Building, Car, Shield, Zap } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

{
  /* Empréstimos Section */
}
export default function LoanSection() {
  return (
    <section id="emprestimos" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Nossas Soluções de Crédito
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encontre o empréstimo ideal para suas necessidades com condições que
            cabem no seu bolso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
              Empréstimo Pessoal Rápido
            </h3>
            <p className="text-gray-600 text-center mb-4">
              Bom histórico de crédito, renda comprovada.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="font-semibold">Taxa de Juros:</span>
                <span className="text-green-600 font-bold">
                  A partir de 1.5% a.m.
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Prazo:</span>
                <span>6-36 meses</span>
              </div>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Solicitar Agora - Criar pagina
            </Button>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
              Crédito Consignado Público
            </h3>
            <p className="text-gray-600 text-center mb-4">
              Servidores públicos, aposentados e pensionistas.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="font-semibold">Taxa de Juros:</span>
                <span className="text-blue-600 font-bold">
                  A partir de 0.99% a.m.
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Prazo:</span>
                <span>Até 96 meses</span>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Saiba Mais - Criar pagina
            </Button>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Car className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
              Financiamento de Veículos
            </h3>
            <p className="text-gray-600 text-center mb-4">
              Sujeito à análise de crédito.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="font-semibold">Taxa de Juros:</span>
                <span className="text-purple-600 font-bold">
                  Taxas competitivas
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Prazo:</span>
                <span>Até 60 meses</span>
              </div>
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Ver Opções - Criar Pagina
            </Button>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-orange-50 to-yellow-50">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
              Capital de Giro para Empresas
            </h3>
            <p className="text-gray-600 text-center mb-4">
              Para MEI e pequenas empresas.
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="font-semibold">Taxa de Juros:</span>
                <span className="text-orange-600 font-bold">
                  Condições especiais
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Prazo:</span>
                <span>Flexível</span>
              </div>
            </div>
            <Button className="w-full bg-orange-600 hover:bg-orange-700">
              Consultar - Criar pagina
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
