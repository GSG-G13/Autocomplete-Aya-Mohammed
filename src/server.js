const http = require("http");
const { handleRouter } = require("./router");
const PORT = 8000;
const server = http.createServer(handleRouter);
server.listen(PORT, () =>
  console.log(
    `Server is listening on port at http://localHost:${PORT}  Ready to accept requests!`
  )
);
