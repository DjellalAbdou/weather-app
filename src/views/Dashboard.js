import React from 'react'

import SideBar from '../components/organismes/SideBar';
import ContentViewer from '../components/organismes/ContentViewer';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SideBar />
      <ContentViewer />
    </div>
  )
}

export default Dashboard;
