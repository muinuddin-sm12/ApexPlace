import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);

    // create user
    const  userRegister = (email, password) => {
        return (createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        }))
    }
    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     const user = result.user;
        //     console.log(user);
        // }).catch(error => {
        //     console.log(error.message)
        // })
    }
    // github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
        // .then(result => {
        //     const user = result.user;
        //     console.log(user);
        // }).catch(error => {
        //     console.log(error.message)
        // })
    }
    // login user
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
        })
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user in the auth state change', currentUser)
            if(currentUser){
                setUser(currentUser)
            }else{
                setUser(null)
            }
        });
        return () => {
            unSubscribe();
        }
    }, [])
    const updateUserProfile = (name, url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url,
        })
    }
    const logOut = () =>{
        setUser(null)
        return signOut(auth);
    }

    const authInfo = {
        user,
        userRegister,
        userLogin,
        googleLogin,
        githubLogin,
        updateUserProfile,
        logOut
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;