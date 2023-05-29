import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAfR-v1myGUYsdeuypGz6dg82kitqzRdzE",
  authDomain: "vanlife-36258.firebaseapp.com",
  projectId: "vanlife-36258",
  storageBucket: "vanlife-36258.appspot.com",
  messagingSenderId: "811654449434",
  appId: "1:811654449434:web:9fa25430f11fca410c44a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

//////////////////////////////////////////////
// fetch fns
export async function fetchVans() {
  const allVansSnapshot = await getDocs(vansCollectionRef);
  const dataArr = allVansSnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  }));

  return dataArr;
}

export async function fetchVan(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  const vanData = { ...vanSnapshot.data(), id: vanSnapshot.id };

  return vanData;
}

export async function fetchHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const allHostVansSnapshot = await getDocs(q);
  const dataArr = allHostVansSnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  }));

  console.log("dataArr");
  return dataArr;
}

export async function fetchHostVan(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  const vanData = { ...vanSnapshot.data(), id: vanSnapshot.id };

  return vanData;
}

// export async function loginUser(creds) {
//   const res = await fetch("/api/login", {
//     method: "post",
//     body: JSON.stringify(creds),
//   });
//   const data = await res.json();

//   if (!res.ok) {
//     throw {
//       message: data.message,
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }

//   return data;
// }
