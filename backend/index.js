const express = require('express');
require('./config')
const Student = require('./Student')
const app = express();
const connectToMongo = require*('./db')
const cors = require('cors')

app.use(cors())
app.use(express.json()) // req to get data to convert to json data
app.post("/student",async(req, res)=>{
    let data = new Student(req.body)
    let result = await data.save()
    console.log(result)
    res.send("Done")
    console.log(req.body)
});

app.get("/listStudents",async(req, res)=>{
    let data = await Student.find();
    console.log(data);
    res.send(data);
});
app.get("/students/:id",async(req, res)=>{
    console.log(req.params)
    let data = await Student.find(req.params);
    console.log(data);
    res.send(data);
});

app.delete("/student/:id", async(req, res)=>{
    console.log(req.params)
    let data = await Student.deleteOne(req.params);
    console.log(data)
    res.send(data)
});
app.put("/student/:id", async(req, res)=>{
  try{
    console.log(req.params)
    let data = await Student.updateOne(
        {"id": req.params.id},
        {$set: req.body}
    );
    console.log(req.params, data, )
    res.status(201).send(data)
  }catch (e) {
    print(e);
 }
});
app.listen(8080)
