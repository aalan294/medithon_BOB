const express = require('express');
const router = express.Router();

router.route('/login')
    .post(require('../CONTROLLERS/doctorController').loginDoctor);
router.route('/all-patients')
    .get(require('../CONTROLLERS/patientController').getAllPatients);

module.exports = router