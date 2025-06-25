import { BlogPost, CardBlog } from "@/components/CardBlog";
import { colorMap } from "@/components/colors";
import HeaderSection from "@/components/sections/HeaderSection";
import ReactMarkdown, { defaultUrlTransform } from "react-markdown";
import { Card, CardContent } from "@/components/ui/card";
import { isSafeImageUrl, timeBr } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogItem() {
  const [post, setState] = useState<BlogPost>();
  const { slug } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/item/${slug}`)
      .then((res) => res.json())
      .then((data: BlogPost) => {
        console.log("object :>> ", data);
        const post: BlogPost = data;
        console.log(
          "JSON.parse(post.) :>> ",
          JSON.parse(JSON.stringify(data.content.toString()))
        );
        setState(post);
      })
      .catch((err) => console.error("Erro ao carregar JSON:", err));
  }, [slug]);

  const color = colorMap[post?.color]?.base || colorMap.green.base;
  return post ? (
    <div>
      <HeaderSection />
      <Card
        className={`hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden border-red-800`}
      >
        {isSafeImageUrl(post.img) ? (
          <img
            src={post.img}
            alt="Imagem ilustrativa"
            className="h-48 w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div
            className={`relative h-48 w-full bg-gradient-to-r from-${color}-300 to-${color}-600`}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-lg font-bold">
              {post.title}
            </div>
          </div>
        )}
        <CardContent className="p-6">
          <div className="text-sm text-gray-500 mb-2">
            {timeBr(post.date)} • {post.author}
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h3>
     
           <div dangerouslySetInnerHTML={{__html: post.content}}></div>
          
          {/* {post.content.split("\n\n").map((mark) => {
            return <ReactMarkdown children={mark} />;
          })} */}
        </CardContent>
      </Card>
    </div>
  ) : (
    <>loading</>
  );
}
