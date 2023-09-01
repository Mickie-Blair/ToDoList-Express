import express from 'express';
import programmingLanguages from "../services/programmingLanguages.js";
const router = express.Router();

/* GET All programming languages. 10 per page  */ 
router.get('/', async function(req, res, next) {
  try {
    res.json(await programmingLanguages.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

export default router;