const express = require('express')
const router = express.Router();

const {createEvent,listEvent,currentMonth} =require('../controllers/fullcalendar')

router.post('/event',createEvent)
router.get('/event',listEvent)
router.post('/current-month',currentMonth)

// router.get('/current-date', currentDate)

module.exports = router;