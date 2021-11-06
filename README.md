# node-cluster

A simple cluster using NodeJs. Based on [article](https://bhattaraib58.medium.com/make-nodejs-handle-5x-request-with-99-9-uptime-adding-10-lines-of-code-e264006d35cf).

## Running

```bash
# starts a cluster with a server for each cpu
npm run start

# starts a single server
npm run start:server

# starts a cluster simulating server randomly crashing
npm run start:simulateServerCrashing
```

## Testing

For testing, you can install [JMeter](https://jmeter.apache.org/) and use the test plan from the tests folder.
