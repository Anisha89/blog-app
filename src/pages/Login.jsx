import Heading from '../components/Heading';
import Input from '../components/Input';
import Button from '../components/Button';
import Change from '../components/Change';
import { useState } from 'react';

const Login = () => {
   const [email,setEmail ]= useState("");
    const [password,setPassword]=useState("");
    const handleLogin =()=>{
  
      }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-12">

      <div className='max-w-md w-full bg-white rounded-2xl p-8 shadow-sm '>
        <Heading headingText={"Welcome Back"} text={"please Enter your details to sign in."}/>
        <div className='space-y-4'>
          <Input type="email"       placeholder="Email Address"
           value={email} 
           setValue={setEmail}/>
           
            <Input type="password"       placeholder="password"
           value={password} 
           setValue={setPassword}/>
           <Button text="Sign in" onClick={handleLogin}  />
         <Change text={"Dont have an account yet?"} linkText="create account" link="/register"
         />
        </div>
      </div>
    </div>
  )
}

export default Login