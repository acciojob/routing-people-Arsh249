// src/UserList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { users } from './user';

const UserList = () => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
