import {config} from 'dotenv'
config();

export default{
    PORT: process.env.PORT || 5000,
    DB_CONFIG: {
        host: process.env.DB_HOST || 'localhost',
        dbname: process.env.DB_NAME || 'inventory',
        user: process.env.DB_USER || 'jota',
        password: process.env.DB_PASSWORD || '123',
    },
}