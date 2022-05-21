const kieryjs = require('kieryjs'); // import KieryJS with the version 1.1.1

// create the server
kieryjs.createServer({
    index: 'index.ejs', // render the file "index.ejs"
    includeVariableOnPage: true, // if you must to include variable on index.ejs then leash true 
    engine: 'ejs', // set the view engine you want to use (ejs, md)
    varPage: { HelloWorld: "Hello, World!" }, // Add a variable called "HelloWorld" with the value "Hello, World!"
    port: 3000, // open on the port 3000 (http://localhost:3000)
    staticFolder: 'public' // set static folder (css, js, img) to "public"
});     