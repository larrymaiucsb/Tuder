var firebase = require('firebase');
var admin = require('firebase-admin');
var serviceAccount = require('./tuder-c1857-firebase-adminsdk-zpvkv-05ca2313e4.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
   // databaseURL: ""https://tuder-c1857.firebaseio.com""
  });
var db = admin.firestore();
let userName = '';
let first = '';
let last = '';
let yearBirth = 0;
var docRef = db.collection('users').doc(userName);//stores a new folder
var array = [];
var setAda = docRef.set({
    first: first,
    last: last,
    subject: array,
    born: yearBirth
})