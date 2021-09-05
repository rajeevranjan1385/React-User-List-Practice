import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = props => {
  const [usersList, setUsersList] = useState([])
  const addUserHandler = data =>{
    setUsersList((prevUsersList) =>{
      return [...prevUsersList, data];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
