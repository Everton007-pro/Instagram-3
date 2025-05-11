// Importando os módulos necessários do Firebase através do CDN
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-firestore.js';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCzd7eE66XGnreij-e6UuXiXLrNGsGo1yE",
  authDomain: "meu-site-3092e.firebaseapp.com",
  projectId: "meu-site-3092e",
  storageBucket: "meu-site-3092e.firebasestorage.app",
  messagingSenderId: "369880096681",
  appId: "1:369880096681:web:8199ffe9e956d260b6aeb8"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Função para adicionar dados no Firestore
const db = getFirestore(app);
export async function addUserToDatabase(username, password) {
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
