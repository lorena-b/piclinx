const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
module.exports={

    MONGOURI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET

}