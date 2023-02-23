//this app downloads the html code of the provided url
//to run this app type into command line the html and file to be generated
//exaample to type into the terminal:  node index.js http://example.edu/ index.html
const request = require('request');
const writeFile = require('./writeFile');
const cmdLinInput = process.argv;

const htmlRequest = function() {
  //this function requests the http for the html of the url provided
  request(cmdLinInput[2], (error, response, body) => {
  
    if (error) {
      console.log("Failed communicte with htpps");
      console.log(response);
    }

    //this function downloads the html from the propvided url into a new file
    writeFile(body);
  });
};

htmlRequest();







