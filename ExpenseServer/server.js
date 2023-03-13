const express = require("express");

const app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, 'build')))

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(8080, () => {
    console.log("EXPRESS SERVER IS LISTENING ON THE PORT 8080")

})
