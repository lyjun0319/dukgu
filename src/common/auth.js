import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get } from "firebase/database";
import {apiKey, authDomain, projectId,databaseURL,appId} from "./constant";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {useMutation, useQuery} from "react-query";


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

async function fetchUser() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      unsubscribe();
      const updateUser = user ? await adminUser(user) : user;
      resolve(updateUser);
    });
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

// 사용자 로그인 뮤테이션
async function loginUser() {
  await signInWithPopup(auth, provider);
  return auth.currentUser;
}

// 사용자 로그아웃 뮤테이션
async function logoutUser() {
  await signOut(auth);
}

// React Query 훅을 사용하여 사용자 정보를 가져오는 쿼리 생성
export function useAuth() {
  const { data, status } = useQuery('user', fetchUser);
  const { mutate: login } = useMutation(loginUser);
  const { mutate: logout } = useMutation(logoutUser);

  return {
    user: data,
    status,
    login,
    logout,
  };
}