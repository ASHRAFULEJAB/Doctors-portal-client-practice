import React, { createContext, useEffect, useState } from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth'
import app from '../firebase/firebaseConfig'

const auth = getAuth(app)

export const DoctorContext = createContext()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loader, setLoader] = useState(true)

  const SignUp = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const userLogin = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const GoogleLogin = (provider) => {
    setLoader(true)
    return signInWithPopup(auth, provider)
  }
  const updateDoctorProfile = (profile) => {
    setLoader(true)
    return updateProfile(auth.currentUser, profile)
  }
  const userLogout = () => {
    setLoader(false)
    localStorage.removeItem('accessToken')

    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)

      setLoader(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const DoctorInfo = {
    loader,
    user,
    setLoader,
    SignUp,
    userLogin,
    userLogout,
    GoogleLogin,
    updateDoctorProfile,
  }

  return (
    <DoctorContext.Provider value={DoctorInfo}>
      {children}
    </DoctorContext.Provider>
  )
}

export default AuthProvider
