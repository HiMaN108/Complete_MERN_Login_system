import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';
import dotenv from "dotenv";

dotenv.config();

const app = express();

//middlewares 

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');  // less hacker know about out stack



const port = process.env.PORT || 8080;


/**HTTP GET Request */

app.get('/', (req, res) => {
    res.status(201).json("Home GET Requested");
});


// api routes 


app.use('/api', router);

/** server shuru karo jab valid connection ho */

connect().then( () => {
    try {
        app.listen(port , () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log("Cannot connect to the server")
    }
}).catch( error => {
    console.log("Invalid database connection...!")
})


