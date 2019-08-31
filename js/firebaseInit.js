const firebaseConfig = {
    apiKey: "AIzaSyAKQ3h822f6t4P2trSzM7uqbeYeOrTHIBE",
    authDomain: "lleidahack-b194c.firebaseapp.com",
    databaseURL: "https://lleidahack-b194c.firebaseio.com",
    projectId: "lleidahack-b194c",
    storageBucket: "lleidahack-b194c.appspot.com",
    messagingSenderId: "16249364180",
    appId: "1:16249364180:web:11aadb61e77d5245"
  };
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();