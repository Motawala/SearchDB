const express = require('express')
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose')
const consolidate = require('consolidate')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const indexRoutes = require('./routes/index')
require('dotenv').config()

app.use(express.static(path.join(__dirname, "public")))


app.engine('html', consolidate.swig)
app.set('views', path.join(__dirname, './src'))
app.set('view engine', 'html');

app.listen(process.env.PORT, () => console.log("server running on port 4000"))


app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))





//MongoDb Connect
const uri = process.env.URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("DB CONNECTED")
  }).catch((error) => {
    console.log("UNABLE to connect to DB", error)
  })
  
  
  
  app.use(bodyParser.json())
  app.use(cookieParser())
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use('/',indexRoutes)


  
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  
  //Attempt to connect to the mongoDB Client
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
    }
  }
  run().catch(console.dir);
  
  
