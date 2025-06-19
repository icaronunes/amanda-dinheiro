import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { NOMESITE } from "@/lib/utils";

export default function HeroSection() {
      {/* Hero Section */}
    return(
      <section id="home" className="relative py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-800 to-emerald-800 bg-clip-text text-transparent leading-tight">
              Realize Seus Sonhos com a
              <span className="text-accent-yellow"> {NOMESITE}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Soluções financeiras personalizadas para você alcançar seus objetivos. Empréstimos com as melhores taxas e consultoria especializada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 text-lg group">
              <a href="#emprestimos">Conheça Nossos Empréstimos</a>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-gray-300 hover:border-green-500 px-8 py-4 text-lg">
              <a href="#contato">Fale Conosco</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
}