import { Mail, User } from "lucide-react"
import Post from "../components/Post"

const Profile = () => {
  return (
 
      <div className="space-y-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex items-center gap-6 ">
        <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
             <User size={40} />
          </div>
        <div>
        <h1 className="text-2xl font-bold text-slate-900 ">Tivin</h1>
        <p className="text-slate-500 flex gap-2 "><Mail/> tivin@gmail.com</p>
       </div>
       
       
        </div>
        <div><h2 className="text-xl font-bold text-slate-900 ml-1">
          My Posts(0)</h2>

          {/*<div className="text-center py-20 text-slate-500 "> Loading Posts...</div>*/}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Post title="Post-1" description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum Generator is a placeholder text commonly used in design and typesetting to fill spaces before final content is ready. "/>
        <Post title="Post-1" description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum Generator is a placeholder text commonly used in design and typesetting to fill spaces before final content is ready. "/>
          <Post title="Post-2" description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum Generator is a placeholder text commonly used in design and typesetting to fill spaces before final content is` ready. "/>
            <Post title="Post-3
            " description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum Generator is a placeholder text commonly used in design and typesetting to fill spaces before final content is ready. "/>
    </div>

    <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 "><p className="text-xl text-slate-600">You have not posted anything yet</p>
    <p className="text-slate-400">Create your first post to see it here</p></div>

          </div>
      </div>
      
  )
}

export default Profile