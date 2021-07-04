const fs = require('fs');
const express = require('express');
const downloads = express.Router();

downloads.get('/files/:category', (req, res) => {
    try {
        const category = req.params.category;
        const folders = fs
            .readdirSync(`./media/files/${category}`, { withFileTypes: true })
            .filter(item => !item.isFile());
        const fileStructure = folders.reduce((result, folder) => {
            const filesInFolder = fs.readdirSync(`./media/files/${category}/${folder.name}`);
            result[folder.name] = filesInFolder;           
            return result;
        }, {});
        res.json({ ...fileStructure });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something is wrong, try again' });
    }
});

module.exports = downloads;