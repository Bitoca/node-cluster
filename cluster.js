const os = require("os");
const cluster = require("cluster");

if (cluster.isMaster) {
  const number_of_cpus = os.cpus().length;

  console.log(`Main process ${process.pid} is running`);
  console.log(`Forking Server for ${number_of_cpus} CPUS\n`);

  // Create a Worker Process for each Available CPU
  for (let index = 0; index < number_of_cpus; index++) {
    cluster.fork();
  }

  // When Worker process has died, Log the worker
  cluster.on("exit", (worker, code, signal) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      /**
       * The condition checks if worker actually crashed and
       * wasn't manually disconnected or killed by master process.
       *
       * The condition can be changed by desired error code,
       * and condition.
       */
      console.log(`Worker ${worker.process.pid} died`);
      cluster.fork();
    }
  });
} else {
  // if Worker process, master is false, cluster.isWorker is true
  // worker starts server for individual cpus
  // the worker created above is starting server
  require("./server");
}
