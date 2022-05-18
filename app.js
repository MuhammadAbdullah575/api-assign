const express= require('express');
var cors = require('cors');
const app=express();
const mongose= require('mongoose');
const bodyParser=require('body-parser');
const postRoute= require('./routes/posts');
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/posts',postRoute);
express.json();

// db connection
mongose.connect("mongodb+srv://abdullahimran3771:comsats575@abdullahddatabase.mlzaj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const db= mongose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=>console.log('connected to database'))
const port=process.env.PORT||4000;
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});