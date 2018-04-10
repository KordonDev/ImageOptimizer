const jimp = require('jimp');
const fs = require('fs');
const { splitInFileNameAndType, absolutePath } = require('./fileHelper.js');

const KarlsbadWidth = 590;
const fileName = process.argv[2];
const [ imageName, imageType ] = splitInFileNameAndType(fileName);

jimp.read(absolutePath(fileName))
    .then(image => {
        image
            .resize(KarlsbadWidth, jimp.AUTO)
            .write(absolutePath(`${imageName}.small.${imageType}`));

    });
