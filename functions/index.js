const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccount.json');
const functions = require('firebase-functions');
const createUser = require('./create_user');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://play-1dd07.firebaseio.com'
});

exports.createUser = functions.https.onRequest(createUser);
