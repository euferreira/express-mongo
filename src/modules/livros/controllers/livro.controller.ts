import livro from "../../../infra/models/livros.schema";
import { Request, Response } from 'express';
import { schema } from "../schema";
import { Livros } from "../../../@types/livros";

export async function searchLivros(req: Request, res: Response) {
    const { id } = req.params;

    try {
        if (id) {
            const livros = await livro.findById(id);
            if (livros) {
                res.status(200).json(livros);
            } else {
                res.status(404).json({ message: "Livro não encontrado" });
            }
        } else {
            const livros = await livro.find({});
            res.status(200).json(livros);
        }
    }
    catch (error) {
        res.status(500).json({ message: "Erro ao buscar livros", error });
    }
}

export async function createLivro(req: Request, res: Response) {
    console.log("createLivro");

    const safeParse = schema.safeParse(req.body);
    if (!safeParse.success) {
        return res.status(400).json({ message: safeParse.error });
    }

    const { titulo, editora, preco, paginas, autor } = req.body;
    const newLivro = await livro.create({ titulo, editora, preco, paginas, autor });

    newLivro ? res.status(201).json(newLivro) : res.status(400).json({ message: "Erro ao criar livro" });
}

export async function updateLivro(req: Request, res: Response) {
    console.log("updateLivro");
    const { id } = req.params;
    const { titulo, autor, editora, paginas, preco } = req.body as Livros;
    const newLivro = await livro.findById(id);
    if (newLivro) {
        newLivro.titulo = titulo || newLivro.titulo;
        newLivro.autor = autor || newLivro.autor;
        newLivro.editora = editora || newLivro.editora;
        newLivro.paginas = paginas || newLivro.paginas;
        newLivro.preco = preco || newLivro.preco;

        await livro.updateOne({
            _id: id
        }, {
            $set: newLivro
        });
        res.status(200).json(livro);
    } else {
        res.status(404).json({ message: "Livro não encontrado" });
    }
}

export async function deleteLivro(req: Request, res: Response) {
    console.log("deleteLivro");
    const { id } = req.params;
    const deleted = await livro.findByIdAndDelete(id);
    deleted ? res.status(204).send() : res.status(404).json({ message: "Livro não encontrado" });
}