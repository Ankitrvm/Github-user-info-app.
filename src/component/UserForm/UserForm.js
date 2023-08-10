import { useState } from "react";
import classes from "./UserForm.module.css";

const UserForm = ({ onSubmit }) => {
  const [userName, setUserName] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    onSubmit(userName);
    setUserName("");
  };

  return (
    <form className={classes.formDiv} onSubmit={formSubmitHandler}>
      <input
        className={classes.userInput}
        type="text"
        placeholder="Enter username"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <button className={classes.btn} type="submit">
        Go
      </button>
    </form>
  );
};

export default UserForm;
