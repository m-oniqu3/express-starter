import cors from "cors";
import "dotenv/config";
import express from 'express';

// initialize express app
const app = express();

app.use(cors()); // enable `CORS` for all routes
app.use(express.json()); // enable parsing of json request body
app.use(express.urlencoded({ extended: true })); 

// set the port and provide fallback 
// process.env is how we access environment variables with dotenv
const PORT = process.env.PORT || 3001;


// route handler to accept GET requests to `/api`
app.get('/api', (_req, res) => {
    res.status(200).json({ message: 'Hello from the server!' });
})

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});