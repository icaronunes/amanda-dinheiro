import { Button } from "../ui/button";
import { BlogPost, CardBlog } from "../CardBlog";
import { useEffect, useState } from "react";

export default function BlogSection() {
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
    <section
      id="blog"
      className="py-20 px-6 bg-gradient-to-r from-gray-50 to-green-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Curtas nossos textos e fique informados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dicas de economia, finanças pessoais, e novidades sobre o mercado de
            crédito.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {state.slice(0, 3).map((post, index) => (
            <CardBlog key={index} post={post} />
          ))}
        </div>
        {state.length > 3 && (
          <div className="text-center mt-12">
            <a href="/posts">
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3">
                Ver Todos os Posts
              </Button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}