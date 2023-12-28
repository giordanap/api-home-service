import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

process.env.APP_ENV = (process.env.APP_ENV || 'production').trim();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const envPath = path.resolve(__dirname, `../../${process.env.APP_ENV}.env`);

dotenv.config({
    path: envPath,
});

class environment {
    static port = process.env.PORT || 3001;
    static mongo_url = process.env.MONGO_URL || 'URL';
    static token_secret = process.env.TOKEN_SECRET || '123456';
}

export default environment;
