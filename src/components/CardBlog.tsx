import { isSafeImageUrl, timeBr } from "@/lib/utils";
import { colorMap } from "./colors";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export type BlogPostProps = {
  post: BlogPost;
};

export type BlogPost = {
  slug: number;
  title: string;
  author: string;
  date: string;
  summary: string;
  content: string;
  img?: string;
  color?: string;
};

export function CardBlog({ post }: BlogPostProps) {
  const color = colorMap[post?.color]?.base || colorMap.green.base;
  return (
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
        <p className="text-gray-600 mb-4">{post.summary}</p>
        <a href={`/post/${post.slug}`}>
          <Button
            variant="outline"
            className={`text-${colorMap[color].base}-600 border-${colorMap[color].base}-600 hover:bg-${colorMap[color].base}-50`}
          >
            Leia Mais
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}
