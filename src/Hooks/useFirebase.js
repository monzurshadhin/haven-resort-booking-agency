import {
    getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Components/Login/Firebase/firebase.init";
firebaseAuthentication();

const useFirebase = () =>{

    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const [message,setMessage] = useState("");
    const [error,setError] = useState("");
     // Auth 
  const auth = getAuth();

  // providers
  const googleProvider = new GoogleAuthProvider();
  
    const handleEmail = (e) => {
        setEmail(e.target.value);
      };
      const handlePassword = (e) => {
        setPassword(e.target.value);
      };

       // loginProcess 
  const loginProcess = () => {
    return signInWithEmailAndPassword(auth, email, password);
  };

 
//     login with google 
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
      };
       // get user all time 
       useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
          } else {
            setUser({});
          }
          setIsLoading(false);
        });
      }, []);
    
       // logout function 
       const logOut = () => {
        setIsLoading(true);
        signOut(auth)
          .then(() => {
            setUser({});
          })
          .catch((error) => {})
          .finally(() => {
            setIsLoading(false);
          });
      };
    
    return {
        handleEmail,
        handlePassword,
        loginProcess,
        ///kk
        signInUsingGoogle,
        user,
        setUser,
        isLoading,
        setIsLoading,
        logOut,
        //kkk
        message,
        setMessage,
        error,
        setError
        
    }
}
export default useFirebase;