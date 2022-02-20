const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const app = initializeApp({
  credential: applicationDefault(),
});

const base = getFirestore();

const getUser = userID => {
  console.log("fired get user", userID);
  return new Promise((res, rej) => {
    base.collection( 'users').doc("" + userID).get()
    .then( document => {
      if (!document.exists) {
        rej('No such user!');
      } else {
        res(document.data());
      }
      })
  })
};

module.exports = {getUser};