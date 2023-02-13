//Traigo una funcion que me conecta la app de react (codigo front end) con la plataforma de firebase.
import { initializeApp } from "firebase/app";
//Traigo una funcion que me conecte con el servicio de base de datos de firebase
import { getFirestore } from "firebase/firestore"

// Estas son mis llaves de acceso
const firebaseConfig = {
  apiKey: "AIzaSyBiQXj7cdECQsJLj70SAEyFS1QYd_GxTys",
  authDomain: "app-react-coderhouse-a7911.firebaseapp.com",
  projectId: "app-react-coderhouse-a7911",
  storageBucket: "app-react-coderhouse-a7911.appspot.com",
  messagingSenderId: "409351976524",
  appId: "1:409351976524:web:270a204520a6d18ba866e9"
};

// Variable que representa la plataforma
const app = initializeApp(firebaseConfig);

//Variable que representa la pestaña de Firebase Database"
 export const db = getFirestore(app)

