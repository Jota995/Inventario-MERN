import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

class Server {

    private PORT:number | string;
    private application;

    constructor(port:number | string, routes:express.Router){
         this.application = express();
         this.PORT = port
         this.application.use(cors())
         this.application.use(express.json())
         this.application.use(morgan('dev'))
         this.application.use(routes)
    }

    public async listen(){
        await this.application.listen(this.PORT)
        console.log(`server on port ${this.PORT}`)
    }
}

export default Server
