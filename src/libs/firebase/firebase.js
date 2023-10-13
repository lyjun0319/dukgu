import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get } from "firebase/database";
import {apiKey, authDomain, projectId,databaseURL,appId} from "../../common/constant";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";


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
  onAuthStateChanged(auth, async (user) => {
    const updateUser = user ? await adminUser(user) : user;
    callback(updateUser);
  });
}

async function adminUser(user){
  return get(ref(database, 'admins'))
    .then((snapshot)=>{
      if(snapshot.exists()){
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin }
      }
      return user;
  })
}