import { auth, firestore } from "./init";
import {
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
    getAuth,
} from "firebase/auth";

import {
    setDoc,
    getDoc,
    doc,
    } from "firebase/firestore";


const googleProvider = new GoogleAuthProvider();

export const logInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        const user = response.user;

        const q = doc(firestore, "users", user.uid);
        const docs = await getDoc(q);
        if ( ! docs.exists()) {
            await setDoc(q, {
                name: user.displayName,
                authProvider: "google",
                email: user.email
        });
    }

    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};

// signInWithEmailAndPassword(auth, email, password)
//     .then((userCredentials) => {
//         const user = userCredentials.user;
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//     });


export const logout = () => {
    signOut(auth);
};

