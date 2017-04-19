import { Router } from 'express';

import examplePeopleRouter from './example-people';

const apiRouter = Router();

apiRouter.use(...examplePeopleRouter);

export default apiRouter;
