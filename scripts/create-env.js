const fs = require('fs');

fs.writeFileSync('./.env', `appId=${process.env.appId}\n`);