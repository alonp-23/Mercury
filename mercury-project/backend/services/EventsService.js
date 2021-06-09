var axios = require('axios');

const allEvents = async () => {
  return await axios
    .get(`http://siton-backend-securityapp3.apps.openforce.openforce.biz/reports`)
    .then(response => {
        return response.data;
    })
    .catch(e => {
        alert(e);
		});
};

const filterLastWeek = async (date) => {
    let irregularEvents = await axios
    .get(`http://siton-backend-securityapp3.apps.openforce.openforce.biz/reports`)
    .then(response => {
        return response.data;
    })
    .catch(e => {
        alert(e);
    });

    let wantedDate = new Date(date);

    let irregularEventsWeek = irregularEvents.filter(event => {
        let date = new Date(event.event_time);
        
        return difBetweenDate(wantedDate, date) < 7;
    });

    let irregularEventsWeekAmount = new Array(7).fill(0);
    irregularEventsWeek.forEach(event => {
        irregularEventsWeekAmount[6-difBetweenDate(wantedDate, new Date(event.event_time))] += 1;
    });

    return irregularEventsWeekAmount
};

const difBetweenDate = (date, beforeDate) => {
    let dayDiff = Math.abs(date - beforeDate);
    return dayDiff / (1000 * 3600 * 24);
}

const countEventsPerDate = (eventsThisDay) => {

};

module.exports = {
	allEvents,
  filterLastWeek
};