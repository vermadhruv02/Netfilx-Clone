import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const  firebaseConfig = {
    apiKey: import.meta.env.REACT_APP_FIREBASE_APP_KEY,
    authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_KEY,
    projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.REACT_APP_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name , email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email , password);
        console.log(`response: ${res}`);
        // alert(res);
        const user = res.user;
        // console.log(`User: ${user}`);
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