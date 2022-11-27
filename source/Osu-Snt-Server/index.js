const express = require("express");
var app = express();

const host = 'localhost';
const port = '1024';

app.use("/assets", express.static(__dirname + "/assets"));
app.listen(port, () => {
    console.log(`app running on port ${port}`)
})

app.use((req, res, next) => {
    switch(req.url)
    {
        case "user": //FIXME: Doesnt redirect at the good page.
            res.sendFile(__dirname + "/src/user/user.html");
            break;

        case "/assets/":
            res.sendFile(__dirname + req.url);
            break;
            
        case "/":
            res.sendFile(__dirname + "/src/osu.html");
            break;
    }
});

