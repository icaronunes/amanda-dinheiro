import { BlogPost, CardBlog } from "@/components/CardBlog";
import HeaderSection from "@/components/sections/HeaderSection";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function BlogList() {
  const [state, setState] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then((res) => res.json())
      .then((data: BlogPost[]) => {
        const list: BlogPost[] = JSON.parse(JSON.stringify(data));
        setState(list);
      })
      .catch((err) => console.error("Erro ao carregar JSON:", err));
  }, []);

  return (
    <div>
      <HeaderSection />
      <section
        id="blog"
        className="py-20 px-6 bg-gradient-to-r from-gray-50 to-green-50"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Custa nossos textos e fique informados
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {state.map((post, index) => (
              <CardBlog key={index} post={post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/posts">
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3">
                Voltar ao topo
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
