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

    let irregularEventsWeekAmount = irregularEvents.filter(event => {
        let date = new Date(event.report_time);
        let dayDiff = Math.abs(wantedDate - date);
        let days = dayDiff / (1000 * 3600 * 24);

        return days <= 7;
    });

    return irregularEventsWeekAmount;
};

module.exports = {
	allEvents,
  filterLastWeek
};