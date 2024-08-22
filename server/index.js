import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from 'cors';
const app = express();

  app.use(cors({
    origin: 'https://scaling-doodle-p57wgp4w7wrcrpqq-5173.app.github.dev',
    methods: 'GET,POST,PUT,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization'
  }));
  

const message = {
    "id": 1,
    "Name": "Joyfree Dias",
    "Age": "23",
    "Gender": "Male",
    "Message": "I'm learning Backend!!",
}

// Routes
app.get('/', (req, res) => {
    res.json(message);
});

app.get('/api/user', (req, res) => {
    res.send("<h1>Username: Joyfree Dias<h1>");
});

// Get a list of 5 jokes
app.get('/jokes',(req, res) => {
    const Jokes = [
        {
            "id": 1,
            "Content": "This is joke 1",
        },
        {
            "id": 2,
            "Content": "This is joke 2",
        },
        {
            "id": 3,
            "Content": "This is joke 3",
        },
        {
            "id": 4,
            "Content": "This is joke 4",
        },
        {
            "id": 5,
            "Content": "This is joke 5",
        }
    ]
    res.send(Jokes);
})

app.listen(process.env.PORT, () => {
    console.log("App Listening on PORT : " + process.env.PORT)
})
