var express = require('express');
var router = express.Router();
var eventService = require('../services/EventsService');

router.get('/', async (req, res, next) => {
    let irregularEvents = await eventService.allEvents();
    res.send(irregularEvents);
});

router.get('/week/:date', async (req, res, next) => {
    let crimesByDates = await eventService.filterLastWeek(req.params.date);
    res.send(crimesByDates);
  });

module.exports = router;