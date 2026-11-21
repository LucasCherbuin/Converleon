import ConvertAPI from 'convertapi';
// configuration token
const convertapi = new ConvertAPI('api-token');

convertapi.convert('file', { File: '/path/to/my_file.docx' })
  .then(function(result) {
    // get converted file url
    console.log("Converted file url: " + result.file.url);

    // save to file
    return result.file.save('/path/to/save/file.pdf');
  })
  .then(function(file) {
    console.log("File saved: " + file);
  })

  .catch(function(e) {
    console.error(e.toString());
  });

  result.saveFiles('/path/to/save/files').then(function(files) {
    console.log("Files saved: " + files);
    });

    // get conversion cost
    console.log("Conversion cost: " + result.conversionCost);