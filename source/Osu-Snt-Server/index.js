const express = require("express");
const mysql = require("mysql");
var app = express();

const host = 'localhost';
const port = '1024';
const sql = mysql.createConnection({host: "localhost", user:"root", port:"3306", database: "osudb"})

app.use("/assets", express.static(__dirname + "/assets"));

app.use((req, res, next) => {
    next();
});

app.get("/post/users/:id", (req, res) => {
    sql.query("SELECT * FROM user WHERE ID='"+req.params.id+"'", function (err, result, fields) {
        if (err) throw err;
        try{
            res.send({
                "id": req.params.id,
                "error": false,
                "username": result[0].NAME,
                "country": result[0].COUNTRY,
                "avatar": result[0].AVATAR_URL,
                "banner": result[0].BANNER_URL,
                "friend": result[0].FOLLOW,
                "playstyle": result[0].PLAYSTYLE,
                "like": result[0].LIKED,
                "played": result[0].PLAYED,
                "discord_account": result[0].DISCORD_USER
            });
        }
        catch{
            res.send({"id": req.params.idm, "error": true})
        }
    });
});

app.get("/post/beatmaps/:id", (req, res) => {
    sql.query("SELECT * FROM beatmap WHERE ID='"+req.params.id+"'", function (err, result, fields) {
        if (err) throw err;
        try{
            res.send({
                "id": req.params.id,
                "error": false,
                "name": result[0].NAME,
                "song": result[0].SONG,
                "description": result[0].DESCRIPTION,
                "banner": result[0].BANNER,
                "link": result[0].LINK,
                "difficulty_name": result[0].DIFFICULTY_NAME
            });
        }
        catch{
            res.send({"id": req.params.idm, "error": true})
        }
    });
});

app.get("/user/:id", (req, res) => {
    res.sendFile(__dirname + "/src/user/user.html");
});

app.get("/" || "home" || "index", (req, res) => {
    res.sendFile(__dirname + "/src/osu.html");
});

app.listen(port, () => {
    console.log(`app running on port ${port}`);

    sql.connect(
        function(err) {
            if (err) throw err;
            console.log("Connected!");
        }
    );
});