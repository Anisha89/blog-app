import React from 'react'

const Input = ({type,placeholder,value,setValue,id,className}) => {
  return (
   <input type={type} 
   placeholder={placeholder} 
   value={value}  
   id={id} 
   onChange={(e)=>setValue(e.target.value)}
   className={`w-full px-4 py-3 rounded-md border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring focus-ring-indigo-500/20 focus:border-indigo-500 transition-all duration-200 ${className}`}
   />
  )
}

export default Input