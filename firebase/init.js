import firebase from 'firebase'
import firestore from 'firebase/firestore'

const firebaseConfig = {
  //configuracion aqui
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();