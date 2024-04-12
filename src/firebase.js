// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCC5kE7lz5e34V3jCHuF95X4biGHjuDkxg",
    authDomain: "guestbook-6d413.firebaseapp.com",
    projectId: "guestbook-6d413",
    storageBucket: "guestbook-6d413.appspot.com",
    messagingSenderId: "376057063819",
    appId: "1:376057063819:web:d498e7466907526621278e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

const registerWithEmailAndPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        return user;
    } catch (err) {
        throw new Error(err.message);
    }
};

const loginWithEmailAndPassword = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return response;
    } catch (err) {
        throw new Error(err.message);
    }
}


const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        throw new Error(error.message);
    }
}

const signInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleAuthProvider);
        const user = response.user;
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

const signInWithFacebook = async () => {
    try {
        const response = await signInWithPopup(auth, facebookAuthProvider);
        const user = response.user;
        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}


export { auth, loginWithEmailAndPassword, registerWithEmailAndPassword, sendPasswordReset, signInWithFacebook, signInWithGoogle };

