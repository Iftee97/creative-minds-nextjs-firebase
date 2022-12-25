import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDhMYHZcppiIEquHUBxAXGPdWBRwkCLMJQ",
  authDomain: "creative-minds-nextjs.firebaseapp.com",
  projectId: "creative-minds-nextjs",
  storageBucket: "creative-minds-nextjs.appspot.com",
  messagingSenderId: "248392423211",
  appId: "1:248392423211:web:aefb17b41bacacf5f1576e"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
  db,
  auth
}
