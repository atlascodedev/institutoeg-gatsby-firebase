class FirebaseAuthMethods {
  constructor(firebaseAuthInstance, firestoreInstance) {
    this.auth = firebaseAuthInstance
    this.db = firestoreInstance
  }

  logoutUser = () => {
    this.auth
      .signOut()
      .then(result => {
        console.log(result, "user was logged out")
      })
      .catch(error => {
        console.log(error, "Could not logout user")
      })
  }

  loginUser = (email, password) => {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(success => {
        console.log(success, "User was logged in")
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default FirebaseAuthMethods
