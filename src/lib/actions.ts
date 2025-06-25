"use server";

import { z } from "zod";
import { addBlogPost } from "./blogData";

const CreatePostSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Título deve ter pelo menos 3 caracteres." })
    .max(100, { message: "Título muito longo." }),
  content: z
    .string()
    .min(10, { message: "Conteúdo deve ter pelo menos 10 caracteres." }),
  img: z
    .string()
    .url({ message: "Por favor, insira uma URL de imagem válida." })
    .optional()
    .or(z.literal("")),
  summary: z.string().min(8, { message: "Precisa criar um Síntese" }),
  author: z.string().optional(),
  color: z.string().optional(),
});

export async function createBlogPostAction(formData: FormData) {
  const validatedFields = CreatePostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
    summary: formData.get("summary"),
    img: formData.get("imageUrl") || undefined, // Ensure empty string becomes undefined if optional
    author: formData.get("author") || undefined,
    color: formData.get("color") || undefined, // Optional color field
  });

  console.log("validatedFields :>> ", validatedFields);
  if (!validatedFields.success) {
    return {
      message: "Erro de validação.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  try {
    const newPost = await addBlogPost(validatedFields.data);

    return {
      message: `Post "${newPost.title}" criado com sucesso!`,
      success: true,
      errors: null,
      slug: newPost.slug,
    };
  } catch (error) {
    return {
      message: "Falha ao criar post. Tente novamente.",
      success: false,
      errors: "Erro ao criar post.",
    };
  }
}

// const ContactFormSchema = z.object({
//   name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
//   email: z.string().email({ message: "Por favor, insira um email válido." }),
//   subject: z.string().min(5, { message: "Assunto deve ter pelo menos 5 caracteres." }).optional().or(z.literal('')),
//   message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres." }),
// });

// export async function submitContactFormAction(prevState: any, formData: FormData) {
//   const validatedFields = ContactFormSchema.safeParse({
//     name: formData.get('name'),
//     email: formData.get('email'),
//     subject: formData.get('subject') || undefined,
//     message: formData.get('message'),
//   });

//   if (!validatedFields.success) {
//     return {
//       message: "Erro de validação.",
//       errors: validatedFields.error.flatten().fieldErrors,
//       success: false,
//     };
//   }

//   try {
//     // Simulate sending email or saving to database
//     console.log("Nova mensagem de contato:", validatedFields.data);
//     // await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

//     return { message: "Mensagem enviada com sucesso! Entraremos em contato em breve.", success: true, errors: null };
//   } catch (error) {
//     console.error("Erro ao enviar mensagem de contato:", error);
//     return { message: "Falha ao enviar mensagem. Tente novamente.", success: false, errors: null };
//   }
// }
