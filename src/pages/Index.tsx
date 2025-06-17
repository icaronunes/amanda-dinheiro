import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star, Users, Zap, Shield, Heart, Award, Phone, Mail, MessageCircle, DollarSign, Calculator, Car, Building, Book } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Amanda Dinheiro
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Início</a>
              <a href="#emprestimos" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Empréstimos</a>
              <a href="#blog" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Blog</a>
              <a href="#sobre" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Sobre Nós</a>
              <a href="#contato" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Contato</a>
            </div>
            
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white">
              Fale Conosco
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-800 to-emerald-800 bg-clip-text text-transparent leading-tight">
              Realize Seus Sonhos
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                com a Amanda Dinheiro
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Soluções financeiras personalizadas para você alcançar seus objetivos. Empréstimos com as melhores taxas e consultoria especializada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg group">
                Conheça Nossos Empréstimos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-green-500 px-8 py-4 text-lg">
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Empréstimos Section */}
      <section id="emprestimos" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nossas Soluções de Crédito
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encontre o empréstimo ideal para suas necessidades com condições que cabem no seu bolso.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Empréstimo Pessoal Rápido</h3>
              <p className="text-gray-600 text-center mb-4">Bom histórico de crédito, renda comprovada.</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="font-semibold">Taxa de Juros:</span>
                  <span className="text-green-600 font-bold">A partir de 1.5% a.m.</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Prazo:</span>
                  <span>6-36 meses</span>
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">Solicitar Agora</Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Crédito Consignado Público</h3>
              <p className="text-gray-600 text-center mb-4">Servidores públicos, aposentados e pensionistas.</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="font-semibold">Taxa de Juros:</span>
                  <span className="text-blue-600 font-bold">A partir de 0.99% a.m.</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Prazo:</span>
                  <span>Até 96 meses</span>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Saiba Mais</Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Financiamento de Veículos</h3>
              <p className="text-gray-600 text-center mb-4">Sujeito à análise de crédito.</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="font-semibold">Taxa de Juros:</span>
                  <span className="text-purple-600 font-bold">Taxas competitivas</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Prazo:</span>
                  <span>Até 60 meses</span>
                </div>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Ver Opções</Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-orange-50 to-yellow-50">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">Capital de Giro para Empresas</h3>
              <p className="text-gray-600 text-center mb-4">Para MEI e pequenas empresas.</p>
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="font-semibold">Taxa de Juros:</span>
                  <span className="text-orange-600 font-bold">Condições especiais</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Prazo:</span>
                  <span>Flexível</span>
                </div>
              </div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">Consultar</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
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
                <div className="text-sm text-gray-500 mb-2">10 de maio de 2024 • Equipe Amanda Dinheiro</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Planejamento Financeiro 101: Guia para Iniciantes</h3>
                <p className="text-gray-600 mb-4">Aprenda o básico do planejamento financeiro para garantir seu futuro.</p>
                <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">Leia Mais</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">22 de abril de 2024 • Equipe Amanda Dinheiro</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Entendendo os Termos do Empréstimo Antes de Contratar</h3>
                <p className="text-gray-600 mb-4">Desmistificando termos comuns de empréstimos como CET, taxas de juros e períodos de carência.</p>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">Leia Mais</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
              <CardContent className="p-6">
                <div className="text-sm text-gray-500 mb-2">15 de março de 2024 • Equipe Amanda Dinheiro</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">5 Dicas Práticas para Economizar Dinheiro no Dia a Dia</h3>
                <p className="text-gray-600 mb-4">Pequenas mudanças de hábitos que podem fazer uma grande diferença no seu orçamento mensal.</p>
                <Button variant="outline" className="text-purple-600 border-purple-600 hover:bg-purple-50">Leia Mais</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3">
              Ver Todos os Posts
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Conheça a Amanda Dinheiro
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Somos uma equipe dedicada a oferecer as melhores soluções financeiras com transparência, agilidade e foco total nas suas necessidades. Nossa missão é empoderar você a tomar decisões financeiras inteligentes e alcançar a estabilidade e prosperidade que merece.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Nossa Visão</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Ser referência em consultoria e soluções de crédito, reconhecida pela excelência no atendimento e pela capacidade de transformar positivamente a vida financeira de nossos clientes.
              </p>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Nossos Valores</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Confiança e Transparência</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Foco no Cliente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Inovação Contínua</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700 font-medium">Ética e Responsabilidade</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quem sou eu Section */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Quem sou eu</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6 border-0 bg-white hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Amanda Silva</h4>
                <p className="text-gray-600 font-medium mb-2">CEO & Fundadora</p>
                <p className="text-gray-600 text-sm">Apaixonada por finanças e ajudar pessoas a alcançarem seus sonhos. Com mais de 10 anos de experiência no mercado financeiro.</p>
              </Card>

              <Card className="text-center p-6 border-0 bg-white hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Faculdade</h4>
                <p className="text-gray-600 font-medium mb-2">Na POLI</p>
                <p className="text-gray-600 text-sm">Formada em 2010 na turma de Engenharia de Produção da POLI, com especialização em Finanças.</p>
              </Card>

              <Card className="text-center p-6 border-0 bg-white hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-900">Trabalhos Anteriores</h4>
                <p className="text-gray-600 font-medium mb-2">10 anos de experiência</p>
                <p className="text-gray-600 text-sm">Trabalhei muitos anos para a Tia Leila na Crefisa. Sai porque ela me explorava.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Tem alguma dúvida ou precisa de uma solução de crédito? Nossa equipe está pronta para ajudar!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Assunto (Opcional)</label>
                  <input 
                    type="text" 
                    placeholder="Sobre o que gostaria de falar?"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sua Mensagem</label>
                  <textarea 
                    rows={4}
                    placeholder="Digite sua mensagem aqui..."
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  ></textarea>
                </div>
                <Button className="w-full bg-white text-green-600 hover:bg-gray-100 py-3 text-lg font-semibold">
                  Enviar Mensagem
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Nossas Informações de Contato</h3>
                <p className="text-lg opacity-90 mb-8">
                  Estamos disponíveis para responder suas perguntas e discutir suas necessidades financeiras.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="opacity-90">contato@amandinheiro.com.br</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="opacity-90">Clique aqui para iniciar uma conversa</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefone</div>
                    <div className="opacity-90">(11) 98788-6560</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">Amanda Dinheiro</span>
              </div>
              <p className="text-gray-400">
                Soluções financeiras personalizadas para você alcançar seus objetivos.
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
                <li>Criar Post</li>
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
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Amanda Dinheiro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
