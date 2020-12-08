
import Server from '../server'
import configuration from '../config/enviroment/development'
import routes from '../routes'
import {ConnectToDatabase} from '../services/MongoDB/database'

const app = new Server(configuration.PORT,routes)
ConnectToDatabase()
app.listen()