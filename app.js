import express from 'express';

const app = express();
// define the port - 3001
const port = process.env.PORT || 3001;

// body parser middleware
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));



// listen to port
app.listen(port, (err) => {
     if(err){
          return console.log('Something bad happened', err);
     }
     console.log(`Server is listening on ${port}`);
});