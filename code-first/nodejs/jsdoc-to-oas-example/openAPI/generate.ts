const buildSpec = require('jsdoc-to-oas');
const fs = require("fs-extra")

var filesToRead = ['./user/index.ts', './user/user.d.ts']
var config = {
    title: 'UserAPI',
    version: '1.0.0',
    servers: [{
        url: 'https://xiaofhua-swagger-test.azurewebsites.net',
    }]
}

var options = {
    servers: [
        {
            url: 'https://xiaofhua-swagger-test.azurewebsites.net'
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