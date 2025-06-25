"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createBlogPostAction } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropdownMenuColor } from "./DropdownMenu";
import Editor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";
import React from "react";
import HtmlRender from "react-markdown-editor-lite/cjs/editor/preview";

const initialStateResponse = {
  message: "",
  errors: null,
  success: false,
  slug: undefined,
};

export default function CreatePostForm() {
  const router = useNavigate();

  const [state, formAction] = useState(initialStateResponse);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState<string>("green");
  const mdEditor = React.useRef(null);
  const [value, setValue] = React.useState("");
  const [html, setHtml] = React.useState("");

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    form.append("color", color); // Append the selected color to the form data
    form.append("content", html); // Append the selected color to the form data

    form.forEach((valor, chave) => {
      console.log(`Chave: ${chave}, Valor: ${valor}`);
    });
    const value = await createBlogPostAction(form);

    formAction(value as typeof initialStateResponse);
  };

  function SubmitButton() {
    return (
      <Button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {loading ? "Publicando..." : "Publicar Post"}
      </Button>
    );
  }

  function handleEditorChange({ html, text }) {
    setValue(text);
    setHtml(html);
    console.log('html :>> ', html);
  }

  useEffect(() => {
    if (state?.message) {
      setLoading(false);
      if (state.success) {
        toast({
          title: "Sucesso!",
          description: state.message,
        });
      } else {
        setLoading(false);
        toast({
          title: "Erro",
          description: state.message || "Falha ao criar post.",
          variant: "destructive",
        });
      }
    }
  }, [state, toast, router]);
  return (
    <Card className="w-full max-w-1xl mx-auto shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">
          Criar Nova Postagem
        </CardTitle>
        <CardDescription>
          Compartilhe suas ideias e conhecimentos com nossos leitores.
        </CardDescription>
      </CardHeader>
      <form onSubmit={(e) => handleSubmit(e)}>
        <CardContent className="space-y-4">
          <label htmlFor="title">Título</label>
          <div className="space-y-1 space-x-10 flex justify-center gap">
            <Input
              id="title"
              name="title"
              placeholder="Título do seu post"
              required
            />
            {state?.errors?.title && (
              <p className="text-sm text-destructive">
                {state.errors.title[0]}
              </p>
            )}

            <DropdownMenuColor onColorChange={setColor} color={color} />
          </div>
          <div className="space-y-2">
            <label htmlFor="summary">Resumo</label>
            <Textarea
              id="summary"
              name="summary"
              placeholder="Aqui fica a descrição do post"
              rows={2}
              required
            />
            {state?.errors?.summary && (
              <p className="text-sm text-destructive">
                {state.errors.summary[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="">Conteúdo</label>
            <Editor
              id=""
              name=""
              ref={mdEditor}
              value={value}
              style={{
                height: "500px",
              }}
              onChange={handleEditorChange}
              renderHTML={(text) => {
                return (
                  <div>
                    <ReactMarkdown>{text}</ReactMarkdown>
                  </div>
                );
              }}
            />
          </div>
          {/* <div className="space-y-2">
            <label htmlFor="content">Conteúdo</label>
            <Textarea
              id="content"
              name="content"
              placeholder="Escreva seu post aqui..."
              rows={10}
              required
            />
            {state?.errors?.content && (
              <p className="text-sm text-destructive">
                {state.errors.content[0]}
              </p>
            )}
          </div> */}
          <div className="space-y-2">
            <label htmlFor="imageUrl">
              URL da Imagem de Destaque (Opcional)
            </label>
            <Input
              id="imageUrl"
              name="imageUrl"
              type="url"
              placeholder="https://exemplo.com/imagem.jpg"
            />
            {state?.errors?.imageUrl && (
              <p className="text-sm text-destructive">
                {state.errors.imageUrl[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label htmlFor="author">Autor (Opcional)</label>
            <Input
              id="author"
              name="author"
              placeholder="Seu nome ou da equipe"
            />
            {state?.errors?.author && (
              <p className="text-sm text-destructive">
                {state.errors.author[0]}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <SubmitButton />
        </CardFooter>
      </form>
      {state?.success && (
        <div className={`p-4 "text-green-600"`}>
          <a
            href={`/blog/${state.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-blue-600 hover:underline"
          >
            {state.message}
          </a>
        </div>
      )}
    </Card>
  );
}
