import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqLTe-ERLgCHs-TshUKesuolZ-QQrLDhA",
  authDomain: "diygm-25c28.firebaseapp.com",
  projectId: "diygm-25c28",
  storageBucket: "diygm-25c28.appspot.com",
  messagingSenderId: "33874799154",
  appId: "1:33874799154:web:7ef86bf2d8febd8a752a2b",
};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export async function fetchList(collectionName) {
  const iterator = await db.collection(collectionName).get();
  const itemList = [];

  iterator.forEach((doc) => {
    itemList.push({ ...doc.data(), id: doc.id });
  });
  return itemList;
}

export async function addDoc(collectionName, data) {
  const result = await db.collection(collectionName).add(data);
  return result;
}

export async function updateDoc(collectionName, data) {
  const ref = await db.collection(collectionName).doc(data.id);
  await ref.set(data);
  return ref;
}

export async function deleteDoc(collectionName, id) {
  return await db.collection(collectionName).doc(id).delete();
}
