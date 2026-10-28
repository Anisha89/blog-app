import { useState } from "react";
import  Heading  from "../components/Heading";
import Post from "../components/Post";
import PostDEtailModal from "../components/PostDEtailModal";
const Home = () => {
  const [selectedPost,setSelectedPost] =useState();
  return (
    <div className="space-y-8">
    <Heading headingText={"Latest Posts"}
              text ="Discover interseting stories from our community"
              center={false}/>
    {/*<div className="text-center py-20 text-slate-500">Loading Posts......</div>*/}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Post title="Post-1" description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum Generator is a placeholder text commonly used in design and typesetting to fill spaces before final content is ready. "/>
        <Post title="Post-1" description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum Generator is a placeholder text commonly used in design and typesetting to fill spaces before final content is ready. "/>
          <Post title="Post-2" description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum Generator is a placeholder text commonly used in design and typesetting to fill spaces before final content is` ready. "/>
            <Post title="Post-3
            " description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum Generator is a placeholder text commonly used in design and typesetting to fill spaces before final content is ready. "/>
    </div>
    {selectedPost && <PostDEtailModal/>}
    </div>
  )
}

export default Home