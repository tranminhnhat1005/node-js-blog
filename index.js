const express = require('express');
const app = express();
const port = 3000;

app.get('/home', (req, res) => res.send('Nak dep trai'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));