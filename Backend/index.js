const http = require("http");
const app = require("./app");
const connectToMongoDB = require("./database/dbConnection");
const { initSocket } = require("./socket");
const server = http.createServer(app);

server.listen(3000);

const onListening = async () => {
  try {
    console.log("server is up...");
    await connectToMongoDB();
    initSocket(server);
  } catch (error) {
    console.log(error.message);
  }
};

server.on("listening", onListening);
