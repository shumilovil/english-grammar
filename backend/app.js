const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const pages = require('./routes/pages.route');
const achievements = require('./routes/achievements.route');
const files = require('./routes/files.route');
const https = require('https');
const fs = require('fs');
const reviews = require('./routes/reviews.route');

const app = express();

const PORT = config.get('port') || 5000;

console.log('ENV', process.env.NODE_ENV);

app.use(cors({
    origin: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : ['https://3words.ru', 'http://3words.ru', 'https://www.3words.ru', 'http://www.3words.ru']
}));
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        console.log('secure', req.secure);
        if (req.secure) {
            // request was via https, so do no special handling
            next();
        } else {
            // request was via http, so redirect to https
            res.redirect('https://' + req.headers.host + req.url);
        }
    } else next();

});
app.use(express.json({ extended: true }));
app.use('/media', express.static(path.join(__dirname, 'media')));
app.use('/api', pages);
app.use('/api', achievements);
app.use('/api', files);
app.use('/api', reviews);

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, '..', 'frontend', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
    });
}

const start = async () => {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        app.listen(PORT, () => {
            console.log(`App has been started on port ${PORT}...`);
            console.log('process.env.NODE_ENV', process.env.NODE_ENV);
            console.log('baseUrl', config.get('baseUrl'));
        });
        if (process.env.NODE_ENV === 'production') {
            const options = {
                cert: fs.readFileSync('./sslcert/fullchain.pem'),
                key: fs.readFileSync('./sslcert/privkey.pem')
            };
            https.createServer(options, app).listen(443);
        }
    } catch (error) {
        console.log('Server error', error.message);
        process.exit(1);
    }
};
start();
