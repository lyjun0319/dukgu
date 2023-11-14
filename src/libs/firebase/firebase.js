import { initializeApp } from "firebase/app";
import {get, getDatabase, ref, set} from "firebase/database";
import {apiKey, authDomain, projectId,databaseURL,appId} from "../../common/constant";
import {v4 as uuid} from "uuid";


const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  appId
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export async function writePortfolio(products, count) {
  const id = String(count+2);

  await set(ref(database, `portfolio/${id}`), {
    id : count + 2,
    ...products,
  });
}

export async function getPortfolio(){
  return get(ref(database, "portfolio"))
    .then(snapshot => {

      if(snapshot.exists()){
        return Object.values(snapshot.val());
      }
      return [];
    })
}