import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

let lists =  [ 
    {
        name: "Daily",
        tasks: [],
    },
    {
        name: "Work",
        tasks: [],
    },
]


app.get('/', (req, res) => {
    let data = {};
    data['lists'] = lists; 
    res.render('templates/index.ejs', data);
});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});
