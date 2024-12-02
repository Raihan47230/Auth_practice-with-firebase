import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import auth from '../firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
export const ProviderData=createContext(null)

const Providers = ({children}) => {
     const[user,setUser]=useState(null)
     const creatUser=(email,password)=>{
          return createUserWithEmailAndPassword(auth,email,password)
     }
     const loginUsers=(email,password)=>{
          return createUserWithEmailAndPassword(auth,email,password)
     }
      
     const singUsers=()=>{
          return signOut(auth)
     }

useEffect(()=>{
    const unsusceib= onAuthStateChanged(auth,currentUser=>{
          console.log('current logined user',currentUser)
          setUser(currentUser)
     })
     return ()=>{
          unsusceib()
     }
},[])



     const handle={
           user,
           creatUser,
           loginUsers,
           singUsers
          
     }
     return (
     <ProviderData.Provider value={handle}>
            {children}
          
     </ProviderData.Provider>
     );
};

export default Providers;