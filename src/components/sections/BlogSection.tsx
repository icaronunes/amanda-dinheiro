import { NOMESITE } from "@/lib/utils";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export default function BlogSection() {
    {/* Blog Section */}
    return(
      <section id="blog" className="py-20 px-6 bg-gradient-to-r from-gray-50 to-green-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Fique por Dentro com Nosso Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dicas de economia, finanças pessoais, e novidades sobre o mercado de crédito.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-400 to-emerald-500"></div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">10 de maio de 2024 • Equipe {NOMESITE}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Planejamento Financeiro 101: Guia para Iniciantes</h3>
                <p className="text-gray-600 mb-4">Aprenda o básico do planejamento financeiro para garantir seu futuro.</p>
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">Leia Mais</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">22 de abril de 2024 • Equipe {NOMESITE}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Entendendo os Termos do Empréstimo Antes de Contratar</h3>
                <p className="text-gray-600 mb-4">Desmistificando termos comuns de empréstimos como CET, taxas de juros e períodos de carência.</p>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">Leia Mais</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">15 de março de 2024 • Equipe {NOMESITE}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">5 Dicas Práticas para Economizar Dinheiro no Dia a Dia</h3>
                <p className="text-gray-600 mb-4">Pequenas mudanças de hábitos que podem fazer uma grande diferença no seu orçamento mensal.</p>
                <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">Leia Mais</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3">
              Ver Todos os Posts - Criar Pagina
            </Button>
          </div>
        </div>
      </section>
    )
}