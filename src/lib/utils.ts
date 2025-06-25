import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NOMESITE = "A  manda Dinheiro"; // Aqui, o caractere U+2009 (thin space) real

export const timeBr = function (date: string): string {
  try {
    const dateFromBr = new Date(date);
    return new Intl.DateTimeFormat("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(dateFromBr);
  } catch (error) {
    console.error("Erro ao formatar data:", error);
    return date;
  }
};

export function isSafeImageUrl(url?: string): boolean {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return (
      parsed.protocol === "https:" &&
      /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(parsed.pathname)
    );
  } catch (e) {
    return false;
  }
}

