
import Server from '../server'
import configuration from '../config/enviroment/development'

const app = new Server(configuration.PORT)
app.listen()