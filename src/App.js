import React, { useState, Fragment } from "react";
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
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );

}

export default App;
