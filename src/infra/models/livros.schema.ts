import { Schema, model } from "mongoose";

const livroSchema = new Schema({
    id: { type: Schema.Types.ObjectId },
    titulo: { type: String, required: true },
    editora: { type: String, required: true },
    preco: { type: Number, required: true },
    paginas: { type: Number, required: true },
    autor: { type: String, required: true },
}, { versionKey: false });

const livro = model("livros", livroSchema);

export default livro;
