
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Star, Users, Zap, Shield, Heart, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ModernSite
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Início</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Sobre</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Serviços</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contato</a>
            </div>
            
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Começar Agora
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight">
              Transforme Suas
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ideias em Realidade
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Criamos experiências digitais extraordinárias que conectam pessoas e impulsionam negócios para o futuro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group">
                Começar Jornada
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg">
                Ver Demonstração
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">99%</div>
              <div className="text-gray-600">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
              <div className="text-gray-600">Suporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Por que nos escolher?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combinamos criatividade, tecnologia e estratégia para entregar resultados excepcionais.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Velocidade</h3>
              <p className="text-gray-600 leading-relaxed">
                Entregamos projetos rapidamente sem comprometer a qualidade, usando as melhores práticas de desenvolvimento.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Segurança</h3>
              <p className="text-gray-600 leading-relaxed">
                Implementamos as mais altas medidas de segurança para proteger seus dados e garantir confiabilidade.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-indigo-50 to-purple-50">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Dedicação</h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe está comprometida em superar expectativas e criar soluções que realmente fazem a diferença.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas para todas as suas necessidades digitais.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Desenvolvimento Web</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Criamos sites e aplicações web modernas, responsivas e otimizadas para performance máxima.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Sites responsivos e modernos</li>
                    <li>• Aplicações web complexas</li>
                    <li>• E-commerce personalizado</li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Design UX/UI</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Criamos interfaces intuitivas e experiências memoráveis que encantam usuários.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Design centrado no usuário</li>
                    <li>• Prototipagem interativa</li>
                    <li>• Testes de usabilidade</li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Consultoria Digital</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Ajudamos a definir estratégias digitais que impulsionam o crescimento do seu negócio.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Análise de mercado</li>
                    <li>• Estratégia digital</li>
                    <li>• Otimização de processos</li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">Suporte & Manutenção</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Oferecemos suporte contínuo para garantir que sua solução funcione perfeitamente.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Suporte 24/7</li>
                    <li>• Atualizações regulares</li>
                    <li>• Monitoramento proativo</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Entre em contato conosco e vamos transformar suas ideias em realidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Falar com Especialista
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Ver Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">ModernSite</span>
              </div>
              <p className="text-gray-400">
                Transformando ideias em experiências digitais extraordinárias.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Desenvolvimento Web</li>
                <li>Design UX/UI</li>
                <li>Consultoria Digital</li>
                <li>Suporte Técnico</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nós</li>
                <li>Nossa Equipe</li>
                <li>Carreiras</li>
                <li>Contato</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@modernsite.com</li>
                <li>+55 11 9999-9999</li>
                <li>São Paulo, Brasil</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ModernSite. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
