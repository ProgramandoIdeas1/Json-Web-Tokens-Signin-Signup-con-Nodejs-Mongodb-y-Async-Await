const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/basicjwt', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected!'))