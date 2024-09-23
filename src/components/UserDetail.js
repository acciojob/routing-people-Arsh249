// src/UserDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { users } from './users';

const UserDetail = () => {
  const { userId } = useParams();
  const user = users.find(user => user.id === parseInt(userId));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <Link to="/">Back to User List</Link>
    </div>
  );
};

export default UserDetail;
