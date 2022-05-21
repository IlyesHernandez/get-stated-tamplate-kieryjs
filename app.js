const kieryjs = require('kieryjs');

// create the server
kieryjs.createServer({
    index: 'index.ejs', // render the file in "views/index.ejs"
    varPage: { HelloWorld: "Hello, World!" }, // Add a variable called "HelloWorld" with the value "Hello, World!"
    port: 3000, // at port 3000 (http://localhost:3000)
    staticFolder: 'public' // set static folder (css, js, img) to "public"
});

kieryjs.app.listen(3000)