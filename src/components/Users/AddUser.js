import { useState } from "react";
import Button from "../UI/Button";
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
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if(+age < 1){ //the age is not a number, it is a string as it comes from input field but if we want to cast it to number, we can use + sign
      return;
    }
    const userInfo = {
      __id: Math.random(),
      username: username,
      age: age,
    };

    console.log(userInfo);
    setUsername('');
    setAge('');
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
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
