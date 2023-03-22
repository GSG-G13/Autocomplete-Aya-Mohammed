const path = require("path");
const fs = require("fs");
const data = require("./data.json");
const https = require("https");

const handleRouter = (req, res) => {
  const url = req.url;
  if (url === "/") {
    const filePath = path.join(__dirname, "../public", "index.html");
    fs.readFile(filePath, (err, file) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(file);
      }
    });
  } else if (url === "/css/style.css") {
    const filePath = path.join(__dirname, "../public", "css/style.css");
    fs.readFile(filePath, (err, file) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(file);
      }
    });
  } else if (url === "/img/backg.jpg") {
    const filePath = path.join(__dirname, "../public", "img/backg.jpg");
    fs.readFile(filePath, (err, file) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        res.end(file);
      }
    });
  } else if (url === "/img/logol.jpg") {
    const filePath = path.join(__dirname, "../public", "img/logol.jpg");
    fs.readFile(filePath, (err, file) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        res.end(file);
      }
    });
  } else if (url === "/js/dom.js") {
    const filePath = path.join(__dirname, "../public", "js/dom.js");
    fs.readFile(filePath, (err, file) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/js" });
        res.end(file);
      }
    });
  } else if (url === "/js/popup.js") {
    const filePath = path.join(__dirname, "../public", "js/popup.js");
    fs.readFile(filePath, (err, file) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/js" });
        res.end(file);
      }
    });
  } else if (url === "/js/fetch.js") {
    const filePath = path.join(__dirname, "../public", "js/fetch.js");
    fs.readFile(filePath, (err, file) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/js" });
        res.end(file);
      }
    });
  } else if (url === "/js/script.js") {
    const filePath = path.join(__dirname, "../public", "js/script.js");
    fs.readFile(filePath, (err, file) => {
      if (err) {
        res.writeHead(500);
        res.end("Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/js" });
        res.end(file);
      }
    });
  } else if (url.includes("/search")) {
    const searchValue = url.split("?q=");
    const myData = data.filter((ele) => {
      return ele.toLowerCase().startsWith(searchValue[1]);
    });
    res.writeHead(200);
    res.end(JSON.stringify(myData));
  } else if (url.includes("/result")) {
    let linkValue = url.split("?q=")[1];
    let name = linkValue.split("&id=")[0];
    let id = linkValue.split("&id=")[1];
    https
      .get(
        `https://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion/${name}.json`,
        (resp) => {
          let oldData = "";
          resp.on("data", (chunk) => {
            oldData += chunk;
          });
          resp.on("end", () => {
            let allData = JSON.parse(oldData);
            console.log(allData);
            let posts = [];
            for (let key in allData.data) {
              posts.push(allData.data[key]);
              posts.filter((e) =>
                e.name.toLowerCase().startsWith(name.toLowerCase())
              );
            }
            res.writeHead(200);
            res.end(JSON.stringify(posts[0]));
          });
        }
      )
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });
  }
};

module.exports = { handleRouter };
