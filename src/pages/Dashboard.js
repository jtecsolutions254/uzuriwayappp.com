import React from 'react';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard - My Web App</title>
        <meta name="description" content="View your dashboard and performance data" />
        {/* You can also add other meta tags, like keywords or open graph tags */}
      </Helmet>
      <h1>Dashboard</h1>
      {/* Your Dashboard page content */}
    </div>
  );
};

export default Dashboard;
