import app from './app.js';
import environment from './common/enviroment.js';
import { connectDB } from './repositories/data/mongo.js'

function main( app ) {
    connectDB();
    app.listen(environment.port);
    console.log('server on port', environment.port);
};

main( app );
