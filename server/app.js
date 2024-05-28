import express from 'express';
import connectDB from '../configs/mongodb_config.js';
import bodyParser from 'body-parser';
import authRoutes from '../routes/auth.js';

const app = express();
// define the port - 3001
const port = process.env.PORT || 3001;

// body parser middleware
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

// connect db
connectDB();

app.use('/user', authRoutes);


// listen to port
app.listen(port, (err) => {
     if(err){
          return console.log('Something bad happened', err);
     }
     console.log(`Server is listening on ${port}`);
});