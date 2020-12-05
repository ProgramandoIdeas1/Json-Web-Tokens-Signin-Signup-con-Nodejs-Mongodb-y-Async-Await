const app = require('./app')
require('./database')

async function init(){
    app.listen(3000)
    console.log('Sever on port', 3000)
}

init()