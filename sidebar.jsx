import React from 'react';
import 'sidebar.css'; // Import CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="tab">Home</div>
      <div className="tab">Settings</div>
      <div className="tab">Create</div>
      <div className="tab">Account</div>
      <div className="tab">Products</div>
      <div className="tab">Favorites</div>
    </div>
  );
};

export default Sidebar;
