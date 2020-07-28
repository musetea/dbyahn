const express = require('express');
const dotenv = require('dotenv');
const path  = require("path");
/**
 * 설정
 */
dotenv.config();

const app = express();
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => res.sendFile('./index.html'));

app.listen(8039, () => console.log('DByAhn Server Up and running'));