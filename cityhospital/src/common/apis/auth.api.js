import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export const signUpAPI = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        sendEmailVerification(user)
                        const uid = user.uid;
                    } else {

                    }
                });
            })
            .then((dataEmailVerification) => {
                onAuthStateChanged(auth, (user) => {
                    console.log(user);
                    if (user) {
                        if (user.emailVerified) {
                            resolve({ payload: "Email Successfully" });
                        } else {
                            resolve({ payload: "Please Verified Your Email Id" });
                        }
                    } else {
                        reject({ payload: "Something Went Wrong." });
                    }
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject({ payload: "Email Id Already Used" });
                } else {
                    reject({ payload: errorCode });
                }
            });
    })
}

export const loginAPI = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((user) => {
                if (user.user.emailVerified) {
                    resolve({ payload: "Login Is Successfully" })
                } else {
                    reject({ payload: "Please Enter Velid Email And Password" })
                }
            })
            .catch((error) => {
                if (error.code.localeCompare("auth/user-not-found") === 0) {
                    reject({ payload: "Please Email Ragistar" })
                } else if (error.code.localeCompare("auth/wrong-password") === 0) {
                    reject({ payload: "Wrong Email Or Password" })
                } else {
                    reject({ payload: error.code });
                }
            })
    })
}