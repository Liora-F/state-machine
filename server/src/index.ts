import express from 'express';
import { handleClick } from './Services/eventHandler';
import * as bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json());


app.post("/api/click", handleClick);


app.listen(5000, () => console.log('server is running'));