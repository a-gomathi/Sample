const user = 'gomathia'
console.log("process.env.myPassword \t: " + process.env.myPassword);

const options1 = {
      method: 'GET',
      uri: `https://auth.docker.io/token?service=registry.docker.io&scope=repository:urbancode/ucv-ext-jira:pull`,
      headers: {
        'Authorization': 'Basic ' + Buffer.from(user + ':' + process.env.myPassword)
      }
    }
console.log("\n options without base64\t: " + JSON.stringify(options1));

const options2 = {
      method: 'GET',
      uri: `https://auth.docker.io/token?service=registry.docker.io&scope=repository:urbancode/ucv-ext-jira:pull`,
      headers: {
        'Authorization': 'Basic ' + Buffer.from(user + ':' + process.env.myPassword).toString('base64')
      }
    }
console.log("\n options with base64\t: " + JSON.stringify(options2));
