const fs = require("fs");


const writeFile = function(body) {
  const cmdLinInput = process.argv;
  let countBytes = 0;
  
  //this function downloads the html from the propvided url into a new file
  fs.writeFile(cmdLinInput[3], body, function(error) {
    if (error) {
      console.log("Failed to write to file");
      return;
    }

    //this loop counts the ammount of bytes there are in the html file
    for (let i of body) {
      i;
      countBytes += 1;
    }
    
    console.log(`Downloaded and saved ${countBytes} bytes to ./index.html`);
  });
};

module.exports = writeFile;