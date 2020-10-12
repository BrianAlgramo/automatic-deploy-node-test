import { getAll, getById, getCountIssuesForProject, root } from '../Controller/Project';
import * as express from 'express';

const router: express.Router = express.Router();

router.get('/', root);

router.get('/getAll', getAll);

router.get('/getById/:projectId/', getById);

router.get('/getCountIssuesForProject/:projectId/', getCountIssuesForProject);

export default router;
