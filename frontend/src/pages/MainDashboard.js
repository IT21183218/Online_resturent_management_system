import React from 'react';
import ManagementCard from '../components/DashboardCard';
import Background from '../components/Template/Background';

const Dashboard = () => {
  return (
    <div>
        <Background contents = {
            <div>
            
            
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-4 gap-4">
        <ManagementCard 
          icon="https://cdn-icons-png.flaticon.com/512/206/206876.png"
          title="Account Management"
          works={["Work 1", "Work 2", "Work 3"]}
        />
        <ManagementCard 
          icon="https://cdn-icons-png.flaticon.com/512/3314/3314694.png"  
          title="Package Management"
          works={["Work 1", "Work 2", "Work 3"]}
        />
        <ManagementCard 
          icon="https://cdn-icons-png.flaticon.com/512/2042/2042791.png"
          title="Customer Management"
          works={["Work 1", "Work 2", "Work 3"]}
        />
        <ManagementCard 
          icon="https://cdn-icons-png.flaticon.com/512/3314/3314694.png"
          title="Finance Management"
          works={["Work 1", "Work 2", "Work 3"]}
        />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8">
        <ManagementCard 
          icon="https://cdn-icons-png.flaticon.com/512/3022/3022689.png"
          title="HR Management"
          works={["Work 1", "Work 2", "Work 3"]}
        />
        <ManagementCard 
          icon="https://cdn-icons-png.flaticon.com/512/3553/3553447.png"
          title="Equipment Management"
          works={["Work 1", "Work 2", "Work 3"]}
        />
        <ManagementCard 
          icon="https://cdn-icons-png.flaticon.com/512/2935/2935237.png"
          title="Site Management"
          works={["Work 1", "Work 2", "Work 3"]}
        />
        <ManagementCard 
          icon="https://cdn-icons-png.flaticon.com/512/1355/1355734.png"
          title="TransportManagement"
          works={["Work 1", "Work 2", "Work 3"]}
        />
      </div>
    </div>
    </div>
        }/>

    </div>
  );
};

export default Dashboard;
