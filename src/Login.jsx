import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import {userContext} from "./App";
import {auth, firestore, SignInWithGoogle} from "./firebase";


let Login=(props)=>{

    let value=useContext(userContext);

useEffect(()=>{
    auth.onAuthStateChanged(async (user)=>{
        if(user){
            let {displayName,email,uid}=user;

            let docRef=firestore.collection("user").doc(uid);
            let document= await docRef.get();
            if(!document.exists){
                docRef.set({
                    displayName,
                    email,
                    posts:[],
                });
            }
            props.handleUser({displayName,email,uid});

        }else{
            props.handleUser(user);
            }
    })
},[]);

return(
    <div>
        { value ? <Redirect to="/home"/> : " "}
    <button onClick={
        SignInWithGoogle
    }>Login with google</button>
    </div>
);  

}

export default Login;