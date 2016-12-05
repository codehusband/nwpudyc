/**
 * Created by Dang_yc on 2016/11/16.
 */
var http = require('http');
var fs = require('fs');
var url=require('url');
var path=require('path');
var PORT="8888";
var MIME_TYPE = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
};
var documentRoot = 'F:/study_items/IMWEB/nodejs_server/WebContent';

var server= http.createServer(function(req,res){

    var url = req.url;
    var file = documentRoot + url;
    var filePath=file;
    console.log(url);
    fs.exists(filePath,function(err) { if(!err){
        res.end("<h1>404</h1><p>file not found</p>");
    }else {
        var ext = path.extname(filePath);
        ext = ext ? ext.slice(1) : 'unknown';
        var contentType = MIME_TYPE[ext] || "text/plain";
        fs.readFile(filePath, function (err, data) {
            if (err) {
                res.end("<h1>500</h1>服务器内部错误！");
            } else {
                res.writeHead(200, {'content-type': contentType});
                res.end(data);
            }
        });//fs.readfile
    }
    });

}).listen(PORT);

app.listen(80);
console.log('服务器开启成功');