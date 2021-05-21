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

export async function fetchItemList() {
  const iterator = await db.collection("items").get();
  const itemList = [];

  iterator.forEach((doc) => {
    itemList.push({ ...doc.data(), id: doc.id });
  });
  return itemList;
}

export async function addItem(data) {
  const result = await db.collection("items").add(data);
  return result;
}

export async function updateItem(data) {
  const ref = await db.collection("items").doc(data.id);
  await ref.set(data);
  return ref;
}

export async function deleteItem(id) {
  return await db.collection("items").doc(id).delete();
}
