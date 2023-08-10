import { useState } from "react";
import "./App.css";
import Card from "./component/Card/Card";
import UserForm from "./component/UserForm/UserForm";

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoding] = useState(false);

  const fetchUserData = async (username) => {
    setIsLoding(true);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error("Error fetching data");
      }
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setIsLoding(false);
    }
  };

  return (
    <div className="App">
      <h1>Github User Info</h1>
      <UserForm onSubmit={fetchUserData} />
      {isLoading ? (
        <div className="loading">Loading... </div>
      ) : (
        userData && <Card user={userData} />
      )}
    </div>
  );
}

export default App;
