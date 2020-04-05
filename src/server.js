const app = require('./app');

//appURL = 3333;
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

/*

app.listen(
    //appURL
    process.env.PORT
);*/
