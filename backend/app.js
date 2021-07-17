const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const pages = require('./routes/pages.route');
const achievements = require('./routes/achievements.route');
const files = require('./routes/files.route');

const app = express();

const PORT = config.get('port') || 5000;

app.use(cors({
    origin: process.env.NODE_ENV === 'production' ? config.get('baseUrl') : '*',
    optionsSuccessStatus: 200
}));
app.use(express.json({ extended: true }));
app.use('/media', express.static(path.join(__dirname, 'media')));
app.use('/api', pages);
app.use('/api', achievements);
app.use('/api', files);

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
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
    } catch (error) {
        console.log('Server error', error.message);
        process.exit(1);
    }
};
start();
