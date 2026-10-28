import { useState } from "react"
import Heading from "../components/Heading";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Button from "../components/Button";


const AddPost = () => {
  const [title,setTitle]=useState("");
   const [description,setDescription]=useState("");
   const handleCreatePost =()=>{ };
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