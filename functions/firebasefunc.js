var firebase = require('firebase');
var admin = require('firebase-admin');
var serviceAccount = require('./tuder-c1857-firebase-adminsdk-zpvkv-05ca2313e4.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
   // databaseURL: ""https://tuder-c1857.firebaseio.com""
  });
var db = admin.firestore();
function store(collect, userName, fullName, yearBirth, array){
    var docRef = db.collection(collect).doc(userName);//stores a new folder
    var setAda = docRef.set({
        fullName: fullName,
        subject: array,
        born: yearBirth
    })
}
function match(collect, userName){
    db.collection(collect).doc(userName).get()
    .then(doc=>{
        if(!doc.exists){
            console.log('no such user');
        }
        else{
            console.log(doc.data());
        }
    })
    .catch(error=>{
        console.error('error getting doc', err);
        process.exit();
    })
}
match('tutor','antm');
