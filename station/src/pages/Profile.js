import React from 'react';
import "../styles/profile.css";

function Profile({updateUser}) {
  return (
    <div className="profile">
            <h1>My Profile</h1>
            <div className="button" onClick={() => updateUser({})} >Logout</div>
    </div>
  )
}

export default Profile