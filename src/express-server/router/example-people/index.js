import { Router } from 'express';

import mock from './mock';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json(mock);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const item = mock.filter(obj => obj.id === id)[0];
  res.status(200).json(item);
});

// *** MUST RETURNS AN app.use(ARRAY) ***
export default ['/people', router];
