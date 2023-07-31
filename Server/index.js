const express = require("express");
const app = express();
const app1 = express();
const app2 = express();
const app3 = express();
const app4 = express();
const app5 = express();
const app6 = express();
const app7 = express();
const app8 = express();
const bodyParser = require('body-parser');
const mysql = require("mysql2");
const cors = require("cors");



const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"sudarshann"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extend: true}));
app.use("/uploads",express.static("./uploads"))

app.get("/" ,(req,res) => {
    res.send("hello")
})


app.get("/api/get", (req , res)=>{
    const sqlGet = "SELECT * FROM customer"
    db.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});

app.get("/api/get/count", (req , res)=>{
    const sqlGet = "SELECT COUNT ('id') AS user FROM customer"
    db.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});


app.post("/api/post", (req, res) => {
    const {name, contact,email,states,city,taluka,village,age,gender} = req.body;
    const sqlInsert = "INSERT INTO customer (name,contact,email,states,city,taluka,village,age,gender) VALUES (?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert ,[name,contact,email,states,city,taluka,village,age,gender], (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});

app.delete("/api/remove/:id", (req, res) => {
    const {id} = req.params;
    const sqlRemove = "DELETE FROM customer WHERE id = ?";
    db.query(sqlRemove ,id, (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});


app.get("/api/get/:id", (req , res)=>{
    const {id} = req.params;
    const sqlGet = "SELECT * FROM customer WHERE id=?"
    db.query(sqlGet,id, (error,result)=>{
        if(error){
            console.log(error)
        }
        res.send(result);
    });
});


app.put("/api/update/:id", (req , res)=>{
    const {id} = req.params;
    const {name,contact,email,states,city,taluka,village,age,gender}=req.body; 
    const sqlUpdate = "UPDATE customer SET name =? ,contact=? ,email=?,states=?,city=?,taluka=? ,village=?,age=?,gender=? WHERE id =?";
    db.query(sqlUpdate,[name,contact,email,states,city,taluka,village,age,gender,id], (error,result)=>{
        if(error){
            console.log(error)
        }
        res.send(result);
    });
});

app.listen(7010, () => {
    console.log("server is running on port 7010");
})



const db1 = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"sudarshann"
});
app1.use(cors());
app1.use(express.json());
app1.use(bodyParser.urlencoded({extend: true}));
app1.get("/" ,(req,res) => {
    res.send("hello")
})

app.listen(7012, () => {
    console.log("server is running on port 7012");
})


app.post('/register',(req,res)=>{
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.passward;

    db1.query("INSERT INTO user (email, username, password) VALUES(?,?,?)",[email, username, password],
    (err, result)=>{
        if(result){
            res.send(result);
        }else{
            res.send({message: "ENTER CORRECT ASKED DETAILS"})
        }
    }
    )
})
app.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.passward;

    db1.query("SELECT * FROM user WHERE username =? AND password=?",[username, password],
    (err, result)=>{
        if(result){
            res.setEncoding({err: err});
        }else{
            if(result.length > 0){
                res.send(result);
            }else{
                res.send({message: "wrong"})
            }
        }
    }
    )
})








const db2 = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"sudarshann"
});
app2.use(cors());
app2.use(express.json());
app2.use(bodyParser.urlencoded({extend: true}));
app2.get("/" ,(req,res) => {
    res.send("hello")
})


app2.get("/api/get", (req , res)=>{
    const sqlGet = "SELECT * FROM Images"
    db2.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});


app2.post("/api/post", (req, res) => {
    const {image} = req.body;
    const sqlInsert = "INSERT INTO Images (image) VALUES (?)";
    db2.query(sqlInsert ,[image], (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});

app2.delete("/api/remove/:id", (req, res) => {
    const {id} = req.params;
    const sqlRemove = "DELETE FROM Images WHERE id = ?";
    db2.query(sqlRemove ,id, (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});


app2.get("/api/get/:id", (req , res)=>{
    const {id} = req.params;
    const sqlGet = "SELECT * FROM Images WHERE id=?"
    db2.query(sqlGet,id, (error,result)=>{
        if(error){
            console.log(error)
        }
        res.send(result);
    });
});


app2.put("/api/update/:id", (req , res)=>{
    const {id} = req.params;
    const {image}=req.body; 
    const sqlUpdate = "UPDATE Images SET image =? WHERE id =?";
    db2.query(sqlUpdate,[image,id], (error,result)=>{
        if(error){
            console.log(error)
        }
        res.send(result);
    });
});

app2.listen(7011, () => {
    console.log("server is running on port 7011");
})



// ---------------------------- addProduct---------------------------

const db4 = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"sudarshann"
});


app4.use(cors());
app4.use(express.json());
app4.use(bodyParser.urlencoded({extend: true}));

app4.get("/" ,(req,res) => {
    res.send("hello")
})


app4.get("/api/get", (req , res)=>{
    const sqlGet = "SELECT * FROM product"
    db4.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});

app4.get("/api/get/count", (req , res)=>{
    const sqlGet = "SELECT COUNT ('id') AS dash FROM product"
    db4.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});


app4.post("/api/post", (req, res) => {
    const {category,subcategory, name, description,image,} = req.body;
    const sqlInsert = "INSERT INTO product (category,subcategory,name,description,image) VALUES (?,?,?,?,?)";
    db4.query(sqlInsert ,[category,subcategory,name,description,image], (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});

app4.delete("/api/remove/:id", (req, res) => {
    const {id} = req.params;
    const sqlRemove = "DELETE FROM product WHERE id = ?";
    db4.query(sqlRemove ,id, (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});

app4.get("/api/get/:id", (req , res)=>{
    const {id} = req.params;
    const sqlGet = "SELECT * FROM product WHERE id=?"
    db4.query(sqlGet,id, (error,result)=>{
        if(error){
            console.log(error)
        }
        res.send(result);
    });
});


app4.put("/api/update/:id", (req , res)=>{
    const {id} = req.params;
    const {category,subcategory,name,description,image}=req.body; 
    const sqlUpdate = "UPDATE product SET category=?,subcategory=?, name =? ,description=? ,image=?  WHERE id =?";
    db4.query(sqlUpdate,[category,subcategory,name,description,image,id], (error,result)=>{
        if(error){
            console.log(error)
        }
        res.send(result);
    });
});

app4.listen(7014, () => {
    console.log("server is running on port 7014");
})





// ---------------------------- Category---------------------------






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

// ---------------------------- SubCategory---------------------------


const db6 = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"sudarshann"
});


app6.use(cors());
app6.use(express.json());
app6.use(bodyParser.urlencoded({extend: true}));

app6.get("/" ,(req,res) => {
    res.send("hello")
})


app6.get("/api/get", (req , res)=>{
    const sqlGet = "SELECT * FROM subcategory"
    db6.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});

app6.get("/api/get/count", (req , res)=>{
    const sqlGet = "SELECT COUNT ('id') AS subcat FROM subcategory"
    db6.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});

app6.post("/api/post", (req, res) => {
    const {name,category, description,image} = req.body;
    const sqlInsert = "INSERT INTO subcategory (name,category,description,image) VALUES (?,?,?,?)";
    db6.query(sqlInsert ,[name,category,description,image], (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});

app6.delete("/api/remove/:id", (req, res) => {
    const {id} = req.params;
    const sqlRemove = "DELETE FROM subcategory WHERE id = ?";
    db6.query(sqlRemove ,id, (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});



app6.get("/api/get/:id", (req , res)=>{
    const {id} = req.params;
    const sqlGet = "SELECT * FROM subcategory WHERE id=?"
    db6.query(sqlGet,id, (error,result)=>{
        if(error){
            console.log(error)
        }
        res.send(result);
    });
});


app6.put("/api/update/:id", (req , res)=>{
    const {id} = req.params;
    const {name,category,description,image}=req.body; 
    const sqlUpdate = "UPDATE subcategory SET name =?,category=? ,description=? ,image=? WHERE id =?";
    db6.query(sqlUpdate,[name,category,description,image,id], (error,result)=>{
        if(error){
            console.log(error)
        }
        res.send(result);
    });
});

app6.listen(7016, () => {
    console.log("server is running on port 7016");
})
// ---------------------------Expenses---------------------------


const db7 = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"",
    database:"sudarshann"
});


app7.use(cors());
app7.use(express.json());
app7.use(bodyParser.urlencoded({extend: true}));

app7.get("/" ,(req,res) => {
    res.send("hello")
})


app7.get("/api/get", (req , res)=>{
    const sqlGet = "SELECT * FROM expenses"
    db7.query(sqlGet, (error,result)=>{
        res.send(result);
    });
});

// app7.get("/api/get/count", (req , res)=>{
//     const sqlGet = "SELECT COUNT ('id') AS subcat FROM subcategory"
//     db7.query(sqlGet, (error,result)=>{
//         res.send(result);
//     });
// });

app7.post("/api/post", (req, res) => {
    const {date,type, amount,mode,description,invoice} = req.body;
    const sqlInsert = "INSERT INTO subcategory (date,type, amount,mode,description,invoice) VALUES (?,?,?,?,?,?)";
    db7.query(sqlInsert ,[date,type, amount,mode,description,invoice], (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});

app7.delete("/api/remove/:id", (req, res) => {
    const {id} = req.params;
    const sqlRemove = "DELETE FROM subcategory WHERE id = ?";
    db7.query(sqlRemove ,id, (error, result)=>{
        if (error){
            console.log(error);
        }
    });
});



// app7.get("/api/get/:id", (req , res)=>{
//     const {id} = req.params;
//     const sqlGet = "SELECT * FROM subcategory WHERE id=?"
//     db7.query(sqlGet,id, (error,result)=>{
//         if(error){
//             console.log(error)
//         }
//         res.send(result);
//     });
// });


// app7.put("/api/update/:id", (req , res)=>{
//     const {id} = req.params;
//     const {date,type, amount,mode,description,invoice}=req.body; 
//     const sqlUpdate = "UPDATE subcategory SET date =?,type=?,amount=? ,mode=? ,description=? ,invoice=? WHERE id =?";
//     db7.query(sqlUpdate,[date,type, amount,mode,description,invoice,id], (error,result)=>{
//         if(error){
//             console.log(error)
//         }
//         res.send(result);
//     });
// });

app7.listen(7017, () => {
    console.log("server is running on port 7017");
})





