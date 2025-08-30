import React from 'react'

function userCard({ users}) {
  return (
    <div key={users.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <p><strong>Name:</strong> {users.name}</p>
          <p><strong>Email:</strong> {users.email}</p>
          <p><strong>Age:</strong> {users.age}</p>
          <p><strong>Role:</strong> {users.role}</p>
          <p><strong>Status:</strong> {users.isActive ? "Active" : "Inactive"}</p>
    </div>
  )
}

export default userCard;
