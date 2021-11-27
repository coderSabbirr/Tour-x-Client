import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/Firebase.init";


initializeAuthentication();

const useFirebase= ()=>{
    const[user,setUser]=useState({})
    const [isLoading, setIsLoading] = useState(true);
    const[error,setError]=useState('')
    
    const auth = getAuth();
  
const signInUsingGoogle= ()=> {
  setIsLoading(true);
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth,googleProvider)
}


useEffect(()=>{
onAuthStateChanged(auth, (user) => {
  if (user) {
   
    setUser(user);
    
  } else {
    setUser({})
  }
  setIsLoading(false)
});
},[])


const logOut =()=>{
  setIsLoading(true);
    signOut(auth)
    .then(()=>{ })
    .finally(()=>setIsLoading(false));
    
}

    return{
        user,
        signInUsingGoogle,
        logOut,
        isLoading,
        error,
        setError
       

        
    }
}

export default useFirebase;