import { useContext, useState } from "react"
import Heading from "../components/Heading";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {db} from "../firebase";
import {AuthContext} from '../context/AuthContext';
import { useNavigate } from "react-router-dom";


const AddPost = () => {
  const [title,setTitle]=useState("");
   const [description,setDescription]=useState("");
   const { user }=useContext(AuthContext);
   const navigate =useNavigate();
   const handleCreatePost =async()=>{
    try{
   if(!title | !description){
    return;
   }
   const postRef = collection(db,"posts");
   await addDoc(postRef,{title,description,userId:user?.id,created_at:serverTimestamp(),author:user?.username})
   setTitle("");
   setDescription("");
  navigate("/");

    }
    catch(error){
      console.log(error);
        }
    };
  return (
  <div className="max-w-3xl mx-auto">
     <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-6">

     <Heading headingText="Create New post"
             text="Share your thoughts with the world"/>

<div className="space-y-2">
   <label className="text-sm font-medium text-slate-700 ml-1  " htmlFor="title">
  Title</label>
   <Input  type="text" 
   placeholder ="Enter post title" 
   value={title}  
   setValue={setTitle} 
   id="title"
   />
   </div>
   <div className="space-y-2">
    <label className="text-sm font-medium text-slate-700 ml-1  " htmlFor="description">
  Content</label>
  <Textarea
  placeholder="Write Your Story..." id="description" value={description} setValue={setDescription}/>
    </div> 
    <div>
      <Button text="Publish Post" onClick={handleCreatePost}/>
    </div>
</div>
</div>
  )
}

export default AddPost