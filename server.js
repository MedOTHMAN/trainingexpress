const express = require ('express');  // importation de l'express
const contacts = require("./contactList");  // importation des contacts
const app = express(); // la construction de l'application


app.get('/' , (req , res) =>{
    res.send("Hello");  // on peut ecrire res.json({msg:"hello"}) ou bien res.send("Hello");
});

const hello = (req,res,next)=>{  // c'est la fonction middleware;elle s'ecrit comme ça
    console.log("hello from the middleware");
    next();   // c'est pour qu'elle passe a la fonction suivante.
};

app.use(express.json()); // elle permet a l'express de lire le body du request json (cvd l'objet a introduire dans la liste de contact,voir app.post)
app.use(hello); // app.use(hello) pour dire a l'application que tu vas utliser la fonction middelware avant toute instruction(get,post,put,delete ....)

app.use("/api" , require("./routes/contactsRoutes")) // on peut ne pas mettre "api"


app.get('/contacts' , (req , res) =>{
    res.send(contacts);  // on peut ecrire res.json({msg:"hello"}) ou bien res.send("Hello");
})


app.listen(5000 , (err)=>{  // pour tester s'il ya une erreur et ou exactement
    if(err) throw (err)
    else console.log("server running on port 5000");
});