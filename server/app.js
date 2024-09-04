const express = require('express');
const app = express();

// Your code here
//prereq in terminal npm install dotenv --save-dev
require('dotenv').config();



app.get('/', (req, res) => {
    res.send(process.env.SECRET_MESSAGE);
});

const port = process.env.PORT;
app.listen(port, () => console.log('Server is listening on port', port));
