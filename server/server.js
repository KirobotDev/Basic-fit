import express from "express";
import path from "path";
import { fileURLToPath } from "url";
app.use(express.json());
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "..", "public"), {
  extensions: ['html']
}));

app.listen(3001, () => {
  console.log("Serveur lancé : http://localhost:3001");
});

