import { NOMESITE } from "@/lib/utils";
import { DollarSign } from "lucide-react";

{
  /* Footer */
}
export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-accent-yellow">{NOMESITE}</span>
            </div>
            <p className="text-gray-400">
              Emprestimos personalizadas para você alcançar seus objetivos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Empréstimo Pessoal</li>
              <li>Crédito Consignado</li>
              <li>Financiamento de Veículos</li>
              <li>Capital de Giro</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Sobre Nós</li>
              <li>Blog</li>
              <li>Contato</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contato@amandinheiro.com.br</li>
              <li>(11) 98788-6560</li>
              <li>WhatsApp disponível</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-2 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {NOMESITE}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
