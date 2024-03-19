import server from "./server";
import routeLivros from "./modules/livros/routes/livros.routes";
import connectToDatabase from "./infra/db";

const port = process.env.PORT || 4000;
const hostname = process.env.HOST || 'localhost';

console.log("Trying to connect to database...");
connectToDatabase()
    .then((connection) => {
        console.log("Connected to database");
    })
    .catch((error) => {
        console.error("Error connecting to database", error);
    });

server.get("/", (req, res) => {
    res.send({
        message: "Hello World"
    });
});

server.use(routeLivros);

server.listen(port, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});