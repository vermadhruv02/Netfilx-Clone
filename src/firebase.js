// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWsjQoZr1F2m-gqwXPyjEq0QCCFz1Ss2g",
  authDomain: "netflixclone-1479e.firebaseapp.com",
  projectId: "netflixclone-1479e",
  storageBucket: "netflixclone-1479e.appspot.com",
  messagingSenderId: "1087598572428",
  appId: "1:1087598572428:web:1556aa9c55a11de6181ca9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name , email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email , password);
        console.log(`response: ${res}`);
        alert(res);
        const user = res.user;
        console.log(`User: ${user}`);
        await addDoc(collection(db,"user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        }) 
    } catch (error) {
        console.log(`SIGNUP-ERROE: ${error}`);
        // alert(`SIGNUP-ERROE: ${error}`);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }    
}

const login = async (email, password)=>{
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);

    } catch (error) {
        console.log(`SIGNIN-ERROE: ${error}`);
        // alert(`SIGNIN-ERROE: ${error}`);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }

}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, signup, login, logout};