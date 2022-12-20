const express = require("express");
const mysql = require("mysql");
const { cipher, decipher, generateUUID } = require("./assets/js/Server/Encryption");
var app = express();

const host = 'localhost';
const port = '1024';
const sql = mysql.createConnection({host: "localhost", user:"root", port:"3306", database: "osudb"})

app.use("/assets", express.static(__dirname + "/assets"));

app.use((req, res, next) => {
    next();
});

app.get("/:action/:type/:id", (req, res) => {
    switch(req.params.action)
    {
        case "post":
            switch(req.params.type){
                case "users":
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
                            res.send({"id": req.params.id, "error": true})
                        }
                    });
                break;
        
                case "beatmaps":
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
                            res.send({"id": req.params.id, "error": true})
                        }
                    });
                break;
            }
        break;

        case "insert":
            switch(req.params.type){
                case "register":
                    const da = req.params.id.split(";");
                    const ci = cipher("csharpisthesamethingthanjava");

                    // localhost/insert/register/username;password;country

                    da[1] = ci(da[1]);
                    const tk = generateUUID();

                    sql.query(`INSERT INTO user (NAME, PASSWORD, COUNTRY, TOKEN) VALUES ('${da[0]}', '${da[1]}', '${da[2]}', '${tk}')`, function (err, result) { if (err) throw err; res.send({ "error": false, "token": tk })});
                break;
            }
        break;

        case "check":
            switch(req.params.type)
            {
                case "password":
                    // localhost/check/password/username;password
                    const da = req.params.id.split(";");
                    const dc = decipher("csharpisthesamethingthanjava");
                    sql.query("SELECT * FROM user WHERE NAME='"+da[0]+"'", function (err, result, fields) {
                        if (err) throw err;
                        try{
                            res.send({
                                "error": false,
                                "username": result[0].NAME,
                                "userid": result[0].ID,
                                "isvalidpassword": da[1] == dc(result[0].PASSWORD)
                            });
                        }
                        catch{
                            res.send({"id": req.params.id, "error": true})
                        }
                    });
                    break;
                case "username":
                    sql.query("SELECT * FROM user WHERE NAME='"+req.params.id+"'", function (err, result, fields) {
                        if (err) throw err;
                        try{
                            res.send({ "id": req.params.id, "taken": result[0].USERNAME != '' ? true : false});
                        }
                        catch{
                            res.send({ "id": req.params.id, "taken": false})
                        }
                    });
                break;

                case "token":
                    sql.query("SELECT * FROM user WHERE TOKEN='"+req.params.id+"'", function (err, result, fields) {
                        if (err) throw err;
                        try{
                            res.send({ "id": result[0].ID, "username": result[0].NAME});
                        }
                        catch{
                            res.send({ "id": req.params.id, "taken": false})
                        }
                    });
                break;
            }
            break;
    }
});

app.get("/user/:id", (req, res) => {
    res.sendFile(__dirname + "/src/user/user.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/src/user/account.html")
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