import express from 'express';
import { resolve } from 'path';

import routers from './router';
import exampleClientHTML from './client/client.html';

const app = express();

app.use(
  express.static(resolve(__dirname, 'client')),
);
app.use('/api', routers);

app.get('/', (req, res) => {
  res.send(exampleClientHTML);
});

export default app;
