import "dotenv/config"; // biblioteca instalada para geração de variaveis de ambiente
                        // para não passar senhas e logim direto no código e subir para o git
                        // tem que instalar no no terminal dotenv colocar na principal do projeto
                        // e criar um arquivo na raiz .env e criar as váriaveis de ambiente lá


import app from "./src/app.js";


const PORT = 3000;

app.listen(PORT, () => {
    console.log("servidor escutando!");
}); 