var express = require('express');
var designRouter = require('./routes/designRoute');
var bodyParser = require('body-parser');
var cors = require('cors');


var app = express();
var port = process.env.port || 3000;

app.use(cors({origin: '*'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/designs', designRouter);

app.listen(port, () => {
  console.log('running on port', port);
});