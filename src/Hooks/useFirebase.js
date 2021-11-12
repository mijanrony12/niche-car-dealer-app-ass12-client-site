import firebaseInitial from "../pages/LoginPage/Firebase/Firebase.init"
import {updateProfile , getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged ,GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import axios from "axios";
firebaseInitial()
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const [ user, setUser ] = useState({})
    const [ authError, setAuthError ] = useState('');
    const [isLoading, setIsLoading]=useState(true)
    const [ admin, setAdmin ] = useState(false)
    
   //register system implement
  const RegisterUser = (email, password,name, history) => {
      setIsLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
              .then((result) => {
                const newUser = {email, displayName: name}
                  setUser(newUser)
                  //send name to firebase after creation
                     updateProfile(auth.currentUser, {
                        displayName: name
                        }).then(() => {
                      
                        }).catch((error) => {
                       
                        });
                setAuthError('')
                userAddDatabase(email, name)
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


    //google sign in system
    const signInUsingGoogle = (location, history) => {
            signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                googleSaveUser(result.user.email, result.user.displayName)
                const destination = location?.state?.from || '/';
                history.push(destination)
            }).catch((error) => {
               setAuthError(error.message);
                
            });
    }



    useEffect(() => {
        fetch(`https://stormy-reef-80779.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => { setAdmin(data.admin)})
    },[user.email])

//user save user
    const userAddDatabase = (email, displayName) => {
        const user = { email, displayName }
        fetch('https://stormy-reef-80779.herokuapp.com/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body:JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
               
        })
    }
//google user save database
    const googleSaveUser = (email, displayName) => {
        const user = { email, displayName }
        axios.put('https://stormy-reef-80779.herokuapp.com/users', user)
        .then(res => {})
    }

    return {
        user,
        authError,
        RegisterUser,
        LoginUser,
        signInUsingGoogle,
        logOut,
        admin,
        isLoading
    }
}

export default useFirebase;