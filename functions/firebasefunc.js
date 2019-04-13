var firebase = require('firebase');
var admin = require('firebase-admin');
var serviceAccount = require('./tuder-c1857-firebase-adminsdk-zpvkv-05ca2313e4.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
   // databaseURL: ""https://tuder-c1857.firebaseio.com""
  });
var db = admin.firestore();
var docRef = db.collection('users').doc('alovelace');//stores a new folder

var setAda = docRef.set({
    first: 'Ada',
    last: 'Lovelave',
    born: 1815
})