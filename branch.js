// const user = 'gomathia'
console.log("process.env.Docker username \t: " + process.env.Docker_USR);
console.log("process.env.Docker password \t: " + process.env.Docker_PSW);
// console.log("process.env.myPassword \t: " + process.env.myPassword);

const options = {
      method: 'GET',
      uri: `https://auth.docker.io/token?service=registry.docker.io&scope=repository:urbancode/ucv-ext-jira:pull`,
      headers: {
        'Authorization': 'Basic ' + Buffer.from(process.env.Docker_USR + ':' + process.env.Docker_PSW).toString('base64')
      }
    }
console.log("\n options with base64\t: " + JSON.stringify(options));
