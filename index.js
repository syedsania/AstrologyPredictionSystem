const express = require('express')
 const cors = require('cors')
 const { MongoClient } = require('mongodb')
 const bcrypt = require('bcrypt')

 const app = new express();
 app.use(express.json());
 //client is running in port 3000
 //any third party application can be served,if the cors is enabled
 app.use(cors());

const client = new MongoClient('mongodb+srv://admin1:admin1@cluster0.vp8vmmg.mongodb.net/?retryWrites=true&w=majority');
client.connect();
//outer circle is cluster
//inside cluster is database
//inside database is collection (which is simialar to mysql table)
//inside collection is document (whixh is similarto mysql row or record)
const db =client.db("skill")
const col = db.collection("user")

 //from browser,the default url triggering is get method
 //localhost:8081/home
 //1st parameter is address and 2nd parameter is service
 app.get('/home', (req, res) => {
    res.send("it is a home page -- New 2 Page")
 })

 //1st parameter is address and 2nd is server function
app.post('/insert', async (req, res) => {
   //every request will have header and body session
   //req = {header:....,body: actual_data}
   req.body.password = await bcrypt.hash(req.body.password, 5)
   console.log(req.body);
   col.insertOne(req.body);
   res.send("Data Received")
   
})
app.post('/check',async(req,res)=>{
   console.log(req.body)
   //you can give many key value pairs,every key and value is a condition
   //every key is a db column name which will check for corresponding
   var result = await col.findOne({"name":req.body.un})
   if(result != null)
   {
if(await bcrypt.compare(req.body.pw, result.password))
{
 res.send(result);
}
else{
   res.send("fail")
}
   
} 
else{
      res.send("fail")
   }

})

app.get('/show', async (req,res)=>{
   var result = await col.find().toArray();
   console.log(result);
   res.send(result);
})

 app.listen(8081);
 console.log("Server Running");