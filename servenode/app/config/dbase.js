const mongoose = require('mongoose');
require('dotenv').config({ path: 'variable.env'});

const conectarDB = async() => {
    try{

        await mongoose.connect(process.env.DB_MONGO2,{
            useNewUrlParser: true,
            useUnifiedTopoly: true
        })

        console.log('BD Conectada');
    } catch(error) {
        console.log(error);
        process.exit(1); // Detenemos la app

    }

}

module.exports = conectarDB


// const DB_URI = 'mongodb://localhost:27017/myAngular'

// module.exports = () => {

//     const connect = () => {

//         mongoose.connect(DB_URI,
//             {
//                 keepAlive: true,
//                 useNewUrlParse: true,
//                 useUniFieldTopology: true

//             }
//             ).then(()=> {console.log('Conexión Correcta')})
//             .catch((err)=> {
//                 console.log('DB: ERROR !!!!')})
//     }
// }
