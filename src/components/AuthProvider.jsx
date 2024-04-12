import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    // const [error, setError] = useState('')
    const successNotify = () => toast.success("User Login Successfully!");
    // const warnNotify = () => toast.warn("Logout Successfully!");
    const errorNotify = () => toast.error("Something wrong!");


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    // console.log(user)

    // create user
    const  userRegister = (email, password) => {
        return (createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            // console.log(user)
            if(user){
                setUser(user)
                return <Navigate to='/login'></Navigate>
            }
        }))
    }
    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // github login
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    // login user
    const userLogin = (email, password) => {
        return (signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            successNotify()
        }).catch(() => {
            errorNotify()
        }))
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
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
        // warnNotify();
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