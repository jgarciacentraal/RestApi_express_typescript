import { Router } from 'express';
const router = Router();

import {indexInitial} from '../controllers/index.controller';

router.route('/')
   .get((req, res) => {
         res.json(indexInitial)
   });


export default router;   