"use client"
import {signIn} from "next-auth/react";


export default function SignInComponents(){
return (
    <div>
        <h1>Sign In</h1>
        <button onClick={()=>signIn("github")}>
             Sign In with Github
        </button>
    </div>
)
}