import {
  initializeApp
} from 'firebase/app';
import {
  getStorage
} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeL88I3jHScI29RMmaBd4oMYpREaROP5Q",
  authDomain: "img-uploader-d8fc4.firebaseapp.com",
  projectId: "img-uploader-d8fc4",
  storageBucket: "img-uploader-d8fc4.appspot.com",
  messagingSenderId: "794486997734",
  appId: "1:794486997734:web:3471add36f700c22cc3127"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);

