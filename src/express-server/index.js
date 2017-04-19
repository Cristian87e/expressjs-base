import express from 'express';
import { resolve } from 'path';

import { PORT } from '../config';
import routers from './router';

const app = express();

app.get('/', (req, res) => {
  res.sendfile(
    resolve(__dirname, 'hello-world.index.html'),
  );
});

app.use('/api', routers);

app.listen(PORT, () => {
  console.info(`Express is running on port: ${PORT}`);
});

export default app;
