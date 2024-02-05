const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

async function compressImages(inputPath, outputPath = inputPath) {
  try {
    const files = fs.readdirSync(inputPath);
    const imageFiles = files.filter((file) => {
      const extension = path.extname(file).toLowerCase();
      return [".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(extension);
    });
    for (const file of imageFiles) {
      const inputFilePath = path.join(inputPath, file);
      const outputFilePath = path.join(outputPath, file);
      await sharp(inputFilePath).jpeg({ quality: 30 }).toFile(outputFilePath);
      console.log(`Compressed ${file}`);
    }
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}
compressImages(process.argv[2], process.argv[3]);
