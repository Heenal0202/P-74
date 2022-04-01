import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAITmfCSGEp71gF87-jZ_IcYxxgvRg19WU",
  authDomain: "complaint-forum-8b331.firebaseapp.com",
  projectId: "complaint-forum-8b331",
  storageBucket: "complaint-forum-8b331.appspot.com",
  messagingSenderId: "556847351099",
  appId: "1:556847351099:web:cd662d4e6b05cd1018231e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
