// importar express
const express = require('express');
// iniciar express
const app = express();
// nome da pasta no dist que sera feito o build
// const appName = 'angular-material-schematics';
// local onde build ira gerar os arquivos
// const outputPath = `${__dirname}/app/index.html`;

// // seta o diretorio de build para servir o conteudo Angular
// app.use(express.static(outputPath));
// // redirecionar qualquer requisicao para o index.html
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/app/index.html`);
});
// ouvir a porta que o Heroku disponibilizar
app.listen(process.env.PORT);