const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//import router
const postRoutes = require('./routes/posts');
const finance = require('./routes/pendingReqRoutes')
const transaction = require('./routes/Transactions')
const inquaries = require('./routes/Inquaries');
//app middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//router middleware
app.use("/student",postRoutes);
app.use("/posts",finance);
app.use("/transaction", transaction);
app.use("/inquaries", inquaries);

const userName = "Irushi";
const password = "123";
const clusterName = "testCrud";
const dbName = "test";

//use This
// `mongodb+srv://${userName}:${password}@${clusterName}.jrqqrfo.mongodb.net/${dbName}?retryWrites=true&w=majority`


const DB_URL = `mongodb+srv://${userName}:${password}@${clusterName}.t6os5io.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const port = 8000;


mongoose.connect(DB_URL,{
    // useNewUrlParser: true,
    // useUnifildTopology: true
})

.then(()=>{
    console.log('DB connected');
})
.catch((err)=>{
    console.log('DB connection error',err);
})


app.get('/message',(req, res) => {
    res.send("Hello from server!");
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}.`);
});