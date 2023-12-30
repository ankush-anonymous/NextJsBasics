"use client"
import Link from "next/link"
import React from "react";
import {useRouter } from "next/navigation";
import {axios} from "axios"

export default function SignUpPage(){
    const [user,setUser] = React.useState({
        email: "",
        password: "",

        userName:""
    }) 

    const onSignUp = async() =>{
        
        
    }


      return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>SignUp</h1>
            <hr/>
            <label htmlFor="username">username</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="username"
                type="text"
                value={user.userName}
                onChange = {(e)=>setUser({...user,userName:e.target.value})}
                placeholder="userName"
                >
            </input>
            <label htmlFor="email">email</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="email"
                type="text"
                value={user.email}
                onChange = {(e)=>setUser({...user,email:e.target.value})}
                placeholder="email"
                >
            </input>
            <label htmlFor="password">password</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                id="password"
                type="password"
                value={user.password}
                onChange = {(e)=>setUser({...user,password:e.target.value})}
                placeholder="password"
                >
            </input>

            <button
                onClick={onSignUp}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 hover:bg-gray-500 hover:text-black delay-50 transition-all ease-in"
            >SignUp Here</button>
            <Link href="/login">Visit login Page</Link>
        </div>
    )
}