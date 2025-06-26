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
import React from "react";
import MDEditor from "@uiw/react-md-editor";
// No import is required in the WebPack.
import "@uiw/react-markdown-preview/markdown.css";

const initialStateResponse = {
  message: "",
  errors: null,
  success: false,
  slug: undefined,
};

function removeUltimoHifen(str: string): string {
  if (str.endsWith("- ")) {
    return str.slice(0, -2);
  }
  return str;
}

export default function CreatePostForm() {
  const router = useNavigate();

  const [state, formAction] = useState(initialStateResponse);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState<string>("green");
  const [value, setValue] = React.useState("");

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    form.append("color", color);
    form.append("content", value);

    const post = await createBlogPostAction(form);

    formAction(post as typeof initialStateResponse);
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

  useEffect(() => {
    if (state?.message) {
      setLoading(false);
      if (state.success) {
        toast({
          title: "Sucesso!",
          description: state.message,
        });
        setTimeout(() => {
          router(`/post/${state.slug}`);
        }, 2000);
      } else {
        setLoading(false);
        const errosMsg = Object.keys(state.errors)
          .map((key) => {
            return state.errors[key];
          })
          .reduce(
            (accumate, current) => accumate + current + "\n- ",
            "\n- "
          ) as string;
        errosMsg.endsWith("-");
        const cleanMsgs = removeUltimoHifen(errosMsg);
        toast({
          title: state.errors[0],
          description: cleanMsgs || "Falha ao criar post.",
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
            <label>Conteúdo</label>
            <MDEditor
              height={300}
              value={value}
              onChange={setValue}
              data-color-mode="light"
            />
          </div>
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
