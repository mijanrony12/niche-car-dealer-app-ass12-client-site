import firebaseInitial from "../pages/LoginPage/Firebase/Firebase.init"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios";
firebaseInitial()
const useFirebase = () => {
    const auth = getAuth();

    const [ user, setUser ] = useState({})
    const [ authError, setAuthError ] = useState('');
    const [isLoading, setIsLoading]=useState(true)
    const [admin, setAdmin]=useState(false)
   //register system implement
  const RegisterUser = (email, password,history) => {
      setIsLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                setAuthError('')
               userAddDatabase(email, " ")
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
  const LoginUser = (email, password,location,history) => {
  
      setIsLoading(true)
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              
                const user = userCredential.user;
                setUser(user)
                const destination = location?.state?.from || '/'
                history.push(destination)
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

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => { setAdmin(data.admin)})
    },[user.email])

//user save user
    const userAddDatabase = (email, displayName) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
               
        })
    }


    return {
        user,
        authError,
        RegisterUser,
        LoginUser,
        logOut,
        admin,
        isLoading
    }
}

export default useFirebase;