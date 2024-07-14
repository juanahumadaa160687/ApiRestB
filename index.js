import express from 'express';
import morgan from 'morgan';
import {pool} from "./db.js";
import cors from 'cors';

const app = express();
const morganMiddleware = morgan('dev');
const corsMiddleware = cors();

app.use(morganMiddleware);
app.use(corsMiddleware);

app.get('/blog', async (req, res) => {
    const result = await pool.query("SELECT * FROM apiblogapp_post");
    res.json(result[0]);
});

app.get('/blog/:id', async (req, res) => {
    const result = await pool.query("SELECT * FROM apiblogapp_post WHERE id = ?", [req.params.id]);
    res.json(result[0]);
});

app.get('/comentario/:id', async (req, res) => {
    const result = await pool.query("SELECT * FROM apiblogapp_coments WHERE post_id = ?", [req.params.id]);
    res.json(result[0]);
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});