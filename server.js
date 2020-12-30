const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const appRouter = require('./routes/index.route');
const cors = require('cors');

app.use(express.static(__dirname + '/public'));
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(appRouter);

app.listen(3000, () => {
  console.log('NodeJS is running!');
});
