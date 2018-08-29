import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';

const USERS: string[] = [];

express()
  .use(bodyParser.json(), cors({ origin: '*'}))
  .get('/users', (req, res, next) => {
    res.status(200).json({ value: USERS });
  })
  .post('/users', (req, res, next) => {
    USERS.push(req.body.name);
    res.status(201).end();
  })
  .listen(5000, () => console.log('listening on port 5000'));
