const paths = require('./paths');


module.exports = {
    mode: 'development',
    entry: [paths.src + '/index.js'],

    output: {
        path: paths.bulid,
        filename: 'main.bundle.js'
    }
}