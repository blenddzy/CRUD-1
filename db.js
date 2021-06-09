const mongoose = require('mongoose')
const url = 'mongodb://localhost/alumno_db'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar MongoDB'))
db.once('open', function callback() {
    console.log('conectado a mongoDB')
})

module.exports = db