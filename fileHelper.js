const splitInFileNameAndType = (fileName) => {
    const lastDotIndex = fileName.lastIndexOf('.');
    return [ fileName.slice(0, lastDotIndex), fileName.slice(lastDotIndex + 1)];
}

const absolutePath = (fileName) => {
    return __dirname + '/' + fileName;
}
module.exports = {
    splitInFileNameAndType,
    absolutePath,
};
