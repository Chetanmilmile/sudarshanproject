const express = require("express");
const router = new express.Router();
const conn = require("../db/conn");
const multer = require ('multer');
const moment = require("moment");

const db5 = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"sudarshann"
});


app5.use(cors());
app5.use(express.json());
app5.use(bodyParser.urlencoded({extend: true}));

app5.get("/" ,(req,res) => {
    res.send("hello")
})


app5.get("/api/get", (req , res)=>{
    const sqlGet = "SELECT * FROM category"
    db5.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});

app5.get("/api/get/count", (req , res)=>{
    const sqlGet = "SELECT COUNT ('id') AS cat FROM category"
    db5.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});


app5.post("/api/post", (req, res) => {
    const {name, description,image,time} = req.body;
    const sqlInsert = "INSERT INTO category (name,description,image,time) VALUES (?,?,?,?)";
    db5.query(sqlInsert ,[name,description,image,time], (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});

app5.delete("/api/remove/:id", (req, res) => {
    const {id} = req.params;
    const sqlRemove = "DELETE FROM category WHERE id = ?";
    db5.query(sqlRemove ,id, (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});

app5.get("/api/get/:id", (req , res)=>{
    const {id} = req.params;
    const sqlGet = "SELECT * FROM category WHERE id=?"
    db5.query(sqlGet,id, (error,result)=>{
        if(error){
            console.log(error)
        }
        res.send(result);
    });
});


app5.put("/api/update/:id", (req , res)=>{
    const {id} = req.params;
    const {name,description,image,time}=req.body; 
    const sqlUpdate = "UPDATE category SET name =? ,description=? ,image=? ,time=? WHERE id =?";
    db5.query(sqlUpdate,[name,description,image,time,id], (error,result)=>{
        if(error){
            console.log(error)
        }
        res.send(result);
    });
});

app5.listen(7015, () => {
    console.log("server is running on port 7015");
})