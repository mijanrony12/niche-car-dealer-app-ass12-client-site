import firebaseInitial from "../pages/LoginPage/Firebase/Firebase.init"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
firebaseInitial()
const useFirebase = () => {
    const auth = getAuth();

    const [ user, setUser ] = useState({})
    const [ authError, setAuthError ] = useState('');
    const [isLoading, setIsLoading]=useState(true)

   //register system implement
  const RegisterUser = (email, password,history) => {
      setIsLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                setAuthError('')
               
                history.push('/')
            })
            .catch((error) => {
                 setAuthError(error.message);     
            }).finally(()=> setIsLoading(false));
    }


    // observer system implement
    useEffect(() => {
         const unsubsribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
            
             }
             return unsubsribe;
         });
      setIsLoading(false)
    },[])


   // login system implement
  const LoginUser = (email, password) => {
  
      setIsLoading(true)
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              
                const user = userCredential.user;
                setUser(user)
            })
            .catch((error) => {        
               setAuthError(error.message);
            }).finally(()=>setIsLoading(false));
    }

    // logout system implement
    const logOut = () => {
         signOut(auth).then(() => {
           setUser({})
            }).catch((error) => {
            authError(error.message)
            }).finally(()=>setIsLoading(false));;
    }


    return {
        user,
        authError,
        RegisterUser,
        LoginUser,
        logOut,
        isLoading
    }
}

export default useFirebase;