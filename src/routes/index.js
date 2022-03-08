const router = require('express').Router();
const helloRoute = require('./hello');
const operaciones = require('./operaciones');


router.use('/op', operaciones);

router.use('/hello', helloRoute);



module.exports = router;