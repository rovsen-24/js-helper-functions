const fs = require("fs");
function renameFiles(directoryPath, renamePattern) {
  const files = fs.readdirSync(directoryPath);
  for (const file of files) {
    const newFilename = renamePattern(file);
    if (newFilename !== file) {
      fs.renameSync(file, newFilename);
    }
  }
}
const directoryPath = process.argv[2];
const renamePattern = (file) => {
  return file.replaceAll("-", "&");
};
renameFiles(directoryPath, renamePattern);
