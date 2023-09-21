/*const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
let dbURI = `mongodb://${host}/travlr`;
const readline = require('readline');

// avoid current server discovery and monitoring engine is deprecated
mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout(() => mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }), 1000);
}

mongoose.connection.on('connected', () => {
    console.log('connected');
});

mongoose.connection.on('error', err => {
    console.log('error: ' + err);
    return connect();
});

mongoose.connection.on('disconnected', () => {
    console.log('disconnected');
});

if(process.platform === 'win32') {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', () => {
        process.emit("SIGINT");
    });
};

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

// For nodemon restarts
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// for app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

connect();

//bring in the mongoose schema
require('./models/travlr');*/

const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
let dbURI = 'mongodb://${host}/travlr';
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGODB_URI;
}
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to $(dbURI}');
});
mongoose.connection.on('error', err => {
    console.log('Moongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log('Mongoose disconnected through ${msg}');
        callback();
    });
};

// For nodemon restarts
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

require('./models/travlr');
/*const path = require('path');
console.log(path.resolve(__dirname, './travlr'));
const Travlr = require('./travlr');*/




