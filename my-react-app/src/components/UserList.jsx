export default function UserList(){
    const users = [
        {id: "user-001-employee", name:"alice", email:"alice@example.com"},
        {id: "user-002-employee", name:"bob", email:"bob@example.com"},
        {id: "user-003-employee", name:"Jhon", email:"jhon@example.com"},
    ];

    return(
        <div>
            {users.map((user) =>(
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );

    
}