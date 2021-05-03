const express = require("express"); // importation de l'express
const contacts = require("../contactList"); // importation des contacts
const router = express.Router(); //elle permet d'executer le module route

router.get("/contacts", (req, res) => {
  // on change le mot app par router(obligatoire)
  res.send(contacts); // on peut ecrire res.json({msg:"hello"}) ou bien res.send("Hello");
});

router.get("/contacts/:id", (req, res) => {
  let contact = contacts.filter((el) => el.id === parseInt(req.params.id))[0]; // parseint pour rendre le id sous forme de string
  res.send(contact);
});

router.delete("/contacts/:id", (req, res) => {
  let contactLeft = contacts.filter((el) => el.id !== parseInt(req.params.id)); // parseint pour rendre le id sous forme de string
  res.json({ contactLeft });
});

router.post("/contacts/", (req, res) => {
  //post c'est pour ajouter des donnée a notre liste de contact
  let contactToAdd = req.body; // req.body c'est la requette faite par l'utilisateur a faire envoyer vers la liste de contact
  contacts.push(contactToAdd);
  res.send("contact added");
});
router.put("/contacts/:id", (req, res) => { // .put permet de modifer un objetdans la liste de contact
  let newData = req.body;
  let newContacts = contacts.map((el) =>
    el.id === parseInt(req.params. id) ? { ...el , ...newData } : el
  );
  res.send(newContacts);
});

module.exports = router;
