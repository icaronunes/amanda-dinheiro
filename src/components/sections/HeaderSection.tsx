import { DollarSign } from "lucide-react";
import { Button } from "../ui/button";
import { NOMESITE } from "../../lib/utils";


 {/* Header/Navigation */}
export default function HeaderSection() {
    return(
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-accent-yellow" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-accent-yellow">
              {NOMESITE}
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Início</a>
              <a href="#emprestimos" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Empréstimos</a>
              <a href="#blog" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Blog</a>
              <a href="#sobre" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Sobre Nós</a>
            </div>
            
            <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-accent-yellow">
              <a href="#contato">Fale Conosco</a>
            </Button>
          </nav>
        </div>
      </header>
    )
}