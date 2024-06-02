import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import router from './routes/team.route.js';


const app = express();
const PORT = 8008;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Welcome to the home page");
});

 app.use('/', router);




connectDB();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});