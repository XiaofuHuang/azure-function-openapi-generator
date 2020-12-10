const buildSpec = require('jsdoc-to-oas');
const fs = require("fs-extra")

var filesToRead = ['./user/index.ts', './user/user.d.ts']
var config = {
    title: 'My Todos API',
    version: '1.0.0',
    servers: [{
        url: 'https://power-app-test-ts.azurewebsites.net/api',
        description: 'My main web server'
    }]
}

var options = {
    termsOfService: 'https://power-app-test-ts.azurewebsites.net',
    contact: {
        name: 'API Support',
        url: 'http://www.example.com/support',
        email: 'support@example.com'
    },
    license: {
        name: 'Apache 2.0',
        url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
    },
    servers: [
        {
            url: 'https://power-app-test-ts.azurewebsites.net/api/',
            description: 'test'
        }
    ]
};

buildSpec(filesToRead, config, options).then(spec => {
    fs.writeFileSync("dist/swagger.json", JSON.stringify(spec, null, 2));
})
.catch(error => {
    fs.writeFileSync("dist/error.json", JSON.stringify(error, null, 2));
    throw error;
});    