import { Link, useNavigate } from "react-router-dom";
import InputBox from "../../custom-ui/LabelInputBox"
import { signUp } from "../../utils/types";
import { useState } from "react";
import axios from "axios";


export function Auth({type}:{type:"signup" | "signin"}){
    const navigate = useNavigate();
    const [signUpInput,setsignUpInput] = useState<signUp>({
        username:"",
        email:"",
        password:""
    })

    async function handleClick(){
        const apiUrl = import.meta.env.VITE_BACKEND_URL;
        if(type === "signup"){

            const res = await axios.post(apiUrl+"/user/"+type,signUpInput)
            if(res.status === 200){
                alert(res.data.msg);
                navigate("/signin")                
            }else if(res.status === 411){
                alert(res.data.msg)
            }
        }else if(type === "signin"){
            const res = await axios.post(apiUrl+"/user/"+type,signUpInput)
            if(res.status === 200){
                // console.log(res.data.token)
                localStorage.setItem("token", res.data.token);
                navigate("/blogs")
            }else if(res.status === 500){
                alert("Check your email and password!")
            }
        }
    }

    return <div className="h-screen flex justify-center flex-col items-center">
        <div className="text-3xl font-bold">
            {type === "signup"?"Create an Account":"Welcome Back!"}
        </div>
        <div className="pt-2 text-slate-800 font-normal">
            {type === "signup" ? "Already have an account?" : "Don't have an account?"}
             
             <Link className="pl-2 underline" to={type==="signup"?"/signin":"/signup"}>{type === "signup" ? "Login" : "Sign Up"}</Link>
        </div>
        <div className="pt-5">
            {type === "signup" ? <InputBox label="Username" placeholder="John Doe" onChange={(e)=>{
            setsignUpInput(c=>({
                ...c,
                username: e.target.value
            }))
        }}/> : <></>}
        </div>
        <div className="pt-4">

        <InputBox label="Email" placeholder="john@gmail.com" onChange={(e)=>{
            setsignUpInput(c => ({
                ...c,
                email:e.target.value
            }))
        }}/>
        </div>
        <div className="pt-4">
        <InputBox type="password" label="Password" placeholder="*******" onChange={(e)=>{
            setsignUpInput(c => ({
                ...c,
                password:e.target.value
            }))
        }}/>
        </div>
        <div className="pt-5">
        <button type="button" onClick={handleClick} className="w-80 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" >{type === "signup" ? "Sign up" : "Sign in" }</button>
        </div>

    </div>
}