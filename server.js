import express from 'express';
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/teleconsulta', (req, res) => {
    const payload = req.body;
    console.log(('[teleconsulta] payload: ', payload));
    res.status(200).json({ok: true});
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em localhost:${PORT}`);
});