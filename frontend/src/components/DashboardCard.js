import React from 'react';

const ManagementCard = ({icon, title, works}) => {
  return (
    <div className="bg-blue-700 rounded-lg shadow-md p-6">
      <img src={icon} alt="Management Part Icon" className="w-16 h-16 mx-auto" />
      <h2 className="text-lg font-medium text-gray-50 text-center mt-4">{title}</h2>
      <ul className="mt-4">
        {works.map((work, index) => (
          <li key={index} className="text-gray-700 text-sm">{work}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManagementCard;
