const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.getTeams = functions.https.onRequest((request, response) => {
  response.send("Hello from GetTeams!");
});

exports.createStandup = functions.https.onRequest((request, response) => {
  response.send("Hello from commitStandup!");
});

exports.modifyStandup = functions.https.onRequest((request, response) => {
  response.send("Hello from modifyStandup!");
});

exports.getStandupForTeam = functions.https.onRequest((request, response) => {
  response.send("Hello from getStandupForTeam!");
});
