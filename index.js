document.getElementById("newEventBtn").addEventListener("click", function() {
    alert("Novo evento criado!");
});

function initGoogleCalendarAPI() {
    gapi.load('client:auth2', function() {
        gapi.client.init({
            apiKey: 'AIzaSyC4L2UAP4DRcFoEaZqNhfncvqcpFZt7vVk',
            clientId: 'SEU_CLIENT_ID_AQUI',
            discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
            scope: 'https://www.googleapis.com/auth/calendar.events'
        }).then(function () {
            return gapi.client.calendar.events.list({
                'calendarId': 'primary',
                'timeMin': (new Date()).toISOString(),
                'showDeleted': false,
                'singleEvents': true,
                'maxResults': 10,
                'orderBy': 'startTime'
            });
        }).then(function(response) {
            const events = response.result.items;
            console.log("Eventos encontrados: ", events);
        });
    });
}