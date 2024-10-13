// módulos
const express = require('express');
const path = require('path');
const app = express();

// Configuração da pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/nakatuny', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/nakatuny.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/suporte', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/suporte.html'));
});

let port = 8080; // porta do serve
// Ligando o serve ↓
const server = app.listen(port, () => console.log(`Serve ta ligado na porta: ${port}\nAcesso: http://146.235.62.144:${port}home`));

// analisador de erro ↓
server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.log(`Erro na porta? ${port}

SIGA O EXEMPLO:

=>   sudo lsof -i :8080

ENCONTRE O PID

E EXECUTE: 

=>   kill -9 (Coloque o PID)`)
    } else {
        console.log("erro ao iniciar o servidor ", error);
    }
});
// Fim