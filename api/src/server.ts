import express from 'express'

class Server {

    private PORT:number | string;
    private application;

    constructor(port:number | string){
         this.application = express();
         this.PORT = port
    }

    public async listen(){
        await this.application.listen(this.PORT)
        console.log(`server on port ${this.PORT}`)
    }
}

export default Server
