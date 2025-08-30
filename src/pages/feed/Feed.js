import React from 'react'
import DashboardLayout from "../../layouts/DashboardLayout";
import PostsCard from '../../Widgets/PostsCard';

const Feed = () => {
  return (
    <DashboardLayout>
      <PostsCard />
    </DashboardLayout>
  );
}

export default Feed
