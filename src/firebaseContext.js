import React, { useState, useEffect } from 'react'
import { firebaseApp } from './firebase'
export const FirebaseContext = React.createContext()


export const FirebaseProvider = ({ children }) => {
  const [auth, setAuth] = useState(null)
  const [db, setdb] = useState(null)
  const [storage, setStorage] = useState(null)

  const createAuth = () => {
    setAuth(firebaseApp.auth())
  }

  const createFirestore = () => {
    setdb(firebaseApp.firestore())
  }

  const createStorage = () => {
    setStorage(firebaseApp.storage().ref())
  }

  useEffect(() => {
    createAuth()
    createFirestore()
    createStorage()
  }, [])

  return (
    <FirebaseContext.Provider value={{
      auth,
      db,
      storage
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}
