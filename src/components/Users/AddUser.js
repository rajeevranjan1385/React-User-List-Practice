import { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const usernameChangeHandler = (event) => {
    if (event.target.value === "") {
      return false;
    }
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    if (event.target.value === "") {
      return false;
    }
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.reventDefault();
    if (username === "" || age === "") {
      return false;
    }
    const userInfo = {
      __id: Math.random(),
      username: username,
      age: age,
    };
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" id="age" value={age} onChange={ageChangeHandler} />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
