import React from 'react'
import DashboardLayout from "../../layouts/DashboardLayout";
import PostsCard from '../../Widgets/PostsCard';
import SearchBar from '../../Widgets/SearchBar';
import CreatePost from '../../Widgets/CreatePost';
import ExploreCard from '../../Widgets/ExploreCard';

const Feed = () => {
    const handleNewPost = (content) => {
    console.log("New Post:", content);
    // You can send this to API or add to state
  };
  return (
    <DashboardLayout>
      <SearchBar placeholder={"Search people.."} />
      {/* create post */}
      
      <CreatePost
        profileImage="/profile.jpg"
        placeholder="Share something amazing..."
        onPost={handleNewPost}
      />
   <div className='flex flex-row gap-5'>
  <PostsCard />
  <div className="w-1/4 py-8 hidden lg:block">
  <ExploreCard />
</div>

</div>

      
    </DashboardLayout>
  );
}

export default Feed
