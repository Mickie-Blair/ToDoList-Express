import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('templates/index.ejs');
});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});
