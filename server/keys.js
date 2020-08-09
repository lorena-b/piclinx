const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
module.exports={

    MONGOURI: process.env.MONGO_URI

}