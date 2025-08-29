import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3001;
const HEADER_SECRET = process.env.HEADER_SECRET;

app.post('/teleconsulta', (req, res) => {
    const payload = req.body;
    console.log(('[teleconsulta] payload: ', payload));

    if (req.headers['x-secret'] !== HEADER_SECRET) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    res.status(200).json({ ok: true });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em localhost:${PORT}`);
});