/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
import { Console } from 'console';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        "message":"Enter your URL",
        "name":"URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
   const url=answers.URL
   var qr_svg = qr.image(url);
   // var url_save=;
   var ans= qr_svg.pipe(fs.createWriteStream(url+'.png'));
    //fs.writeFile('/qr_generated/ans');

    
  
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      Console.log(error);
    } else {
      // Something else went wrong
      console.log("error");
    }
  });