import { Router } from "express";
import { 
    createLivro, 
    deleteLivro, 
    searchLivros, 
    updateLivro
} from "../controllers/livro.controller";

const routeLivros = Router();

routeLivros.post("/livros", createLivro);
routeLivros.get("/livros", searchLivros);
routeLivros.get("/livros/:id", searchLivros);
routeLivros.put("/livros/:id", updateLivro);
routeLivros.delete("/livros/:id", deleteLivro);

export default routeLivros;