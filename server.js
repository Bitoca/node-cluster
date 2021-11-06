const http = require("http");

const processId = process.pid;
const args = process.argv.slice(2);
const simulateServerCrashing = args[0] === "simulateServerCrashing";

// Creating server and handling request
const server = http.createServer((req, res) => {
  // Simulate CPU Work
  for (let index = 0; index < 1e7; index++);

  res.end(`Process handled by pid: ${processId}`);
});

server.listen(8080, () => {
  console.log(`Server started in process ${processId}`);
});

// Warning: Only For Testing and Visualization Purpose
// Don't add the code below in production

// Simulate Server Randomly Crashing using process.exit()
if (simulateServerCrashing) {
  setTimeout(() => {
    process.exit(1);
  }, Math.random() * 10000);
}
