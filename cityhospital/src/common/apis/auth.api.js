import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../firebase";

export const signUpAPI = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        sendEmailVerification(user)
                        const uid = user.uid;
                    } else {
                       
                    }
                });
            })
            .then((dataEmailVerification)=>{
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        if(user.emailVerified){
                            console.log("Email Successfully");
                        }else{
                            console.log("Plese Email Verified");
                        }
                    } else {
                        console.log("Someteng Whot Wrong");
                    }
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    console.log("Email Already Used");
                } else {
                    console.log(errorCode);
                }
            });
    })

}