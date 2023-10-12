import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {apiKey, authDomain, projectId,databaseURL,appId} from "../../common/constant";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {getDatabase} from "@firebase/database";

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  appId
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);



export  function login(){
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout(){
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback){
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}

export function databaseCall(){
  console.log(database);
}