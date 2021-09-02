const express = require("express");
const app = express();
const routes = require("./routes");

const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");

const port = 3000;
const address = "localhost";


global.users =[
    {
        name: "Joaquim Machado Lima",
        email: "joaquim@lima.com",
        address: "Rua XYZ, 123",
        height: "1.75m",
        age: 25,
        vote: "Não"
    },
    {
        name: "José Fonseca Filho",
        email: "josefenseca@filho.com",
        address: "Rua ABC, 234",
        height: "1.78m",
        age: 30,
        vote:"Sim"
    },
    {
        name: "Ludwig Wittgenstein Silva",
        email: "ludwig@silva.com",
        address: "Rua DEF, 529",
        height: "1.80m",
        age: 26,
        vote: "Sim"
    },
    {
        name: "Isaac Fausto Emerson",
        email: "isaac@emerson.com",
        address: "Rua FGE, 726",
        height: "1.90",
        age: 18,
        vote: "Não"
    },
    {
        name: "George W. Richard",
        email: "george@richard.com",
        address: "Rua FEV, 229",
        height: "1.68m",
        age: 38,
        vote: "Não"
    },
    {
        name: "Roberto C. Benjamin",
        email: "roberto@benjamin.com",
        address: "Rua BFO, 924",
        height: "1.86m",
        age: 29,
        vote: "Sim"
    },
];



app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',routes);

const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`> Server rodando em http://${host}:${port}`);
});