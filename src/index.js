const express= require("express");
// const mongoose=require("mongoose");
// const mongoose=require("mongoose");
const app= express();

app.use(express.json());

const usersControllers=require("./controllers/users.controllers");
const studentsControllers=require("./controllers/students.controllers");
const batchsControllers=require("./controllers/batchs.controllers");
const evaluationsControllers=require("./controllers/evaluations.controllers");
const submissionsControllers=require("./controllers/submissions.controllers");


app.use("/users",usersControllers);

app.use("/batchs",batchsControllers);
app.use("/students",studentsControllers);
app.use("/evaluations",evaluationsControllers);
app.use("/submissions",submissionsControllers);

const connect=require("./configs/db");

app.listen(5000, async () => {
    try {
      await connect();
    } catch (err) {
      console.log(err);
    }
  
    console.log("listening on port 5000");
  });

 