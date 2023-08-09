const express = require('express');

const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : false}));

app.use('/user',userRoutes);
app.listen(3000,() => {
    console.log("server started at port no 3000")
});



