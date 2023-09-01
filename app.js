import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

import programmingLanguagesRouter from "./routes/programmingLanguages.js";


let current_id = 3;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use("/programming-languages", programmingLanguagesRouter);

let lists = {
                "Daily": [],
                "Work": [],                
            };

app.get('/', (req, res) => {
    let data = {};
    data['lists'] = lists; 

    // connectToDB();
    res.render('templates/index.ejs', data);
});

app.post('/create_task', (req, res) => {
    createTask(req, res);
    res.redirect("/");
});

app.post('/update_task/:listName/:taskID/', (req, res) => {
    updateTask(req, res);    
    res.redirect("/");
});

app.use("/programming-languages", programmingLanguagesRouter);
/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});






function createTask(req, res) {
    let list =  req.body["list"];     
    let new_task =  {
                        id: current_id,
                        text: req.body["task_text"],
                        complete: false,
                    }
    lists[list].push(new_task);
    current_id ++;
  }

  function updateTask(req, res) {
    let listName = req.params['listName'];
    let taskID = req.params['taskID'];
    let listTasks = lists[listName]; 
    let index = listTasks.findIndex(i => i.id == taskID);
    let item = listTasks[index];
    if("update" in req.body) {
        item.complete = true;
    }else {
        item.complete = false;
    }  
  }