var fs = require("fs");
let formidable = require("formidable");
let http = require("http");

http
  .createServer((req, res) => {
    if (req.url == "/fileupload" && req.method.toLowerCase() === "post") {
      let form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        if (!files || !files.filetoupload) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.write("Invalid file upload");
          res.end();
          return;
        }
        let oldPath = files.filetoupload[0].filepath;
        let newPath =
          "/your/path to file/" + files.filetoupload[0].originalFilename;
        fs.rename(oldPath, newPath, (err) => {
          if (err) throw err;
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.write("File uploaded and moved");
          res.end();
        });
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(
        '<form action="fileupload" method="post" enctype="multipart/form-data">'
      );
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write("</form>");
      res.end();
    }
  })
  .listen(3010, () => {
    console.log("Server running at http://localhost:3010/");
  });