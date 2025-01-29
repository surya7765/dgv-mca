import React from 'react'

function FetchApi() {
    const url = "https://api.github.com/users";

    const [users, setUsers] = React.useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
    }
  return (
    <div>
        <h3>Fetch API</h3>
        <button onClick={getUsers}>Get GitHub Users</button>
        {
            users.map((user) => {
                return (
                    <div key={user.id}>
                        <h4>{user.login}</h4>
                        <img src={user.avatar_url} alt="avatar" 
                        style={{width: '100px'}}/>
                    </div>
                )
            })
        }
    </div>
  )
}
export default FetchApi