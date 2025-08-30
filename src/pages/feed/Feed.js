import React from 'react'
import DashboardLayout from "../../layouts/DashboardLayout";
import PostsCard from '../../Widgets/PostsCard';
import SearchBar from '../../Widgets/SearchBar';

const Feed = () => {
  return (
    <DashboardLayout>
      <SearchBar placeholder={"Search people.."} />
      <PostsCard />
    </DashboardLayout>
  );
}

export default Feed
