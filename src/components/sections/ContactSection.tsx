import { Mail, MessageCircle, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { useForm, ValidationError } from "@formspree/react";
import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xgvyzkaa");
  const { toast } = useToast();
  const toastView = state.succeeded;

  useEffect(() => {
    if (toastView) {
      toast({
        title: "Tudo certo!",
        description:
          "Seu formulário foi enviado com sucesso. Aguarde nossa resposta.",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toastView]);

  return (
    <section
      id="contato"
      className="py-20 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Tem alguma dúvida ou precisa de uma solução de crédito? Nossa equipe
            está pronta para ajudar!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          {state.succeeded ? (
            <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Obrigado por entrar em contato!
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Sua mensagem foi enviada com sucesso. Responderemos o mais
                  breve possível.
                </p>
              </div>
            </section>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
                <div className="space-y-6">
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="nome"
                    >
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <ValidationError
                      prefix="Nome"
                      field="nome"
                      errors={state.errors}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="assunto"
                    >
                      Assunto (Opcional)
                    </label>
                    <input
                      name="assunto"
                      type="text"
                      placeholder="Sobre o que gostaria de falar?"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <ValidationError
                      prefix="Assunto"
                      field="assunto"
                      errors={state.errors}
                    />
                  </div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="mensagem"
                  >
                    Sua Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    rows={4}
                    placeholder="Digite sua mensagem com alguma forma de contato"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  ></textarea>
                  <ValidationError
                    prefix="Mensagem"
                    field="mensagem"
                    errors={state.errors}
                  />
                  <Button
                    className="w-full bg-white text-green-600 hover:bg-gray-100 py-3 text-lg font-semibold"
                    disabled={state.submitting}
                    type="submit"
                  >
                    Enviar Mensagem
                  </Button>
                </div>
              </div>
            </form>
          )}
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Minhas Informações de Contato
              </h3>
              <p className="text-lg opacity-90 mb-8">
                Estou disponíveis para responder suas perguntas e discutir suas
                necessidades financeiras.
              </p>
            </div>

            <div
              className="space-y-6"
              onClick={() => window.open("mailto:contato@amandinheiro.com.br")}
            >
              <div className="flex items-center space-x-4 cursor-pointer">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="opacity-90">contato@amandinheiro.com.br</div>
                </div>
              </div>

              <div
                className="flex items-center space-x-4 cursor-pointer"
                onClick={() =>
                  window.open("https://wa.me/5511987886560", "_blank")
                }
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center cursor-pointer">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="opacity-90">
                    Clique aqui para iniciar uma conversa
                  </div>
                </div>
              </div>

              <div
                className="flex items-center space-x-4 cursor-pointer"
                onClick={() => window.open("tel:+5511987886560")}
              >
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
  );
}
