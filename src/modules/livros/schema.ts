import { z } from "zod";

export const schema = z.object({
    titulo: z.string().min(1).max(100),
    autor: z.string().min(1).max(100),
    editora: z.string().min(1).max(100),
    preco: z.number().min(1),
    paginas: z.number().min(1),
});

export type Livro = z.infer<typeof schema>;