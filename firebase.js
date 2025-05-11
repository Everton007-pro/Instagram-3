// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzd7eE66XGnreij-e6UuXiXLrNGsGo1yE",
  authDomain: "meu-site-3092e.firebaseapp.com",
  projectId: "meu-site-3092e",
  storageBucket: "meu-site-3092e.firebasestorage.app",
  messagingSenderId: "369880096681",
  appId: "1:369880096681:web:8199ffe9e956d260b6aeb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js";

// Conecta com o banco Firestore
const db = getFirestore(app);

// Função para salvar os dados no banco
async function addUserToDatabase(username, password) {
  try {
    await addDoc(collection(db, "usuarios"), {
      username: username,
      password: password
    });
    console.log("Usuário salvo com sucesso!");
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
  }
}
