/*
const express = require("express")

const cookieParser = require('cookie-parser')
const PORT = 3001


const app = express()
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("BD.db");
const bcrypt = require('bcrypt')
const saltRound = 10


const jwt = require("jsonwebtoken")
const axios = require("axios");

app.use(express.json())
app.use(cors())
app.use(cookieParser())





app.post("/login", (req, res) => {
    let email = req.body.email.toUpperCase();
    let password = req.body.password
    db.get("SELECT * FROM USER WHERE EMAIL = ?", [email],
        (err, result) => {
            if (err) {
                res.send("Error dans la base de données")
            } else {
                if (result === undefined) {
                    res.send("email inexistant")
                } else if (bcrypt.compareSync(password, result.password)) {
                    req.session.user = result
                    console.log(req.session.user)
                    res.send("T'es connecté")
                } else {
                    res.send("Mot de passe incorrect ")
                }
            }
        }
    )
})


app.post("/register", async (req, res) => {
    let name = req.body.name;
    let email = req.body.email.toUpperCase();
    let password = req.body.password
    db.get("SELECT * FROM USER WHERE EMAIL = ?", [email],
        (err, result) => {
            if (result) {
                res.send("Email déja utilisé ")
                console.log("email")
            } else if (result === undefined) {
                bcrypt.genSalt(saltRound, (err, salt) => {
                        bcrypt.hash(password, salt, (err, hash) => {
                            if (err) {
                                res.send("error")
                            } else {
                                db.run("INSERT INTO USER (NAME, EMAIL, PASSWORD)  VALUES (?,?,?)", [name, email, hash], (err, resu) => {
                                    if (err) console.log(err)
                                    console.log(resu)
                                    res.send("ACCOUNT CREATED SUCCESSFULLY")

                                })
                            }

                        });
                    }
                )
            }


        })
})

app.listen(PORT, () => {
    console.log("server stared at " + PORT)
})


 */
