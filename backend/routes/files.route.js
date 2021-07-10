const fs = require('fs');
const express = require('express');
const files = express.Router();

files.get('/:category/:type', (req, res) => {
    try {        
        const category = req.params.category;
        const type = req.params.type;
        const folders = fs
            .readdirSync(`./media/${category}/${type}`, { withFileTypes: true })
            .filter(item => !item.isFile());
        const fileStructure = folders.reduce((result, folder) => {
            const filesInFolder = fs.readdirSync(`./media/${category}/${type}/${folder.name}`);
            result[folder.name] = filesInFolder;
            return result;
        }, {});
        res.json({ ...fileStructure });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Something is wrong, try again' });
    }
});

module.exports = files;