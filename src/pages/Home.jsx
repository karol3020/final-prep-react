import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Home() {
  const { id } = useParams()
  const [users, setUsers] = useState([])


  useEffect(() => {
   async function callUsers() {
    const users = await axios.get(`https://jsonplaceholder.typicode.com/users?userId=${id}`)
    setUsers(users)
  }
  callUsers() 
}, [])

  return (
    <div className="container">
    <div className="row">
      <div className="user-list">
        <div className="user">
          <div className="user-card">
              {users.map(user =>(
            <div className="user-card__container">
              <h3>{user.name}</h3>
              <p>
                <b>Email:</b>{ user.email}
              </p>
              <p>
                <b>Phone:</b> {user.phone}
              </p>
              <p>
                <b>Website:</b>
                {user.website}
              </p>
            </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home