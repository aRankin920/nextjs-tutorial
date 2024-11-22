import React from 'react'


interface User {  
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users', //Get a list of users in json format.
    { cache: 'no-store'})                         //One way to disable caching. Good for frequently changing data.
  const users: User[] = await res.json();         //Syntax to use to type 'users' of tde 'User' interface object (above props) type.

  return (
    <>
      {/* This bundle is smaller for it's Server side. */}
      <h1> Users </h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => 
            <tr key={user.id}> 
              <td>{user.name}</td>  
              <td>{user.email}</td> 
            </tr>)}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage








{/* Timestamp when page was rendered. Only happens in dev mode, not production*/}
{/* <p>{new Date().toLocaleTimeString()}</p>  */}
