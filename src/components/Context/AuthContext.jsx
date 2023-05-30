import { createContext, useEffect, useState } from "react";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from "../Firebase/Config";
import { Alert } from "bootstrap";


export const AuthContext = createContext()


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false
    })

    

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch(e => alert(e.message))

    }

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
            })
            .catch(e => alert(e.message))
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .catch(e => alert(e.message))
            
    }  

    const logout = () => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            
            if (user) {
                setUser({
                    email: user.email,
                    logged: true
                })
            } else {
                setUser({
                    email: null,
                    logged: false
                })
            }
        })
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            login,
            register,
            logout,
            loginWithGoogle
        }}>
            {children}
        </AuthContext.Provider>
    )
}