import React from "react";
import UserCard from "../components/userCard";
function UserList() {
    const users = [
    {
      id: 1,
      name: "Kevin G",
      email: "kevin@example.com",
      age: 26,
      role: "Developer",
      isActive: true
    },
    {
      id: 2,
      name: "John Doe",
      email: "john@example.com",
      age: 30,
      role: "Designer",
      isActive: false
    },
    {
      id: 3,
      name: "Sophia",
      email: "sophia@example.com",
      age: 28,
      role: "Tester",
      isActive: true
    }
  ];
  return (
    <div>
      <h2>User List</h2>
      {users.map((userdata) => (
        <UserCard users={userdata} />
      ))}
    </div>
  );
}

export default UserList;