import {connect} from 'mongoose';
import config from '../../config/enviroment/development'

const MONGO_CONFIG = {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}

export const ConnectToDatabase = async () =>{
    try {
        const db = await connect(`mongodb+srv://${config.DB_CONFIG.user}:${config.DB_CONFIG.password}@${config.DB_CONFIG.host}/${config.DB_CONFIG.dbname}?retryWrites=true&w=majority`, MONGO_CONFIG)
        console.log(`database is connected to : ${db.connection.name}`)
    } catch (error) {
        console.log(error)
    }
}