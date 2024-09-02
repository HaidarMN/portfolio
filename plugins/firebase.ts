import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: useRuntimeConfig().public.FIREBASE_KEY as string,
    authDomain: "portfolio-4c322.firebaseapp.com",
    projectId: "portfolio-4c322",
    storageBucket: "portfolio-4c322.appspot.com",
    messagingSenderId: "507944843880",
    appId: "1:507944843880:web:16cad0898ac8b9372859dd",
  };

  const app = initializeApp(firebaseConfig);
  const firestoreDB = getFirestore(app);

  return {
    provide: {
      firestoreDB,
    },
  };
});
