import "./styles.css";
import {useState} from 'react';
const Getuser = () => {
  return [
    { username: "john", mail: "@john" },
    { username: "rishi", mail: "@rishi" }
  ];
};

const Finduser = ({ name }) => {
  const users = Getuser();
  const user = users.find((user) => user.username === name);

  if (user) {
    return (
      <>
        <h1>Username: {user.username}</h1>
        <h2>Email: {user.mail}</h2>
      </>
    );
  } else {
    return <h1>User not found</h1>;
  }
};

export default function App() {
  const [inputname,setinputname]=useState("");
  const [display,setdisplay]=useState(false);
  
  const handlename=(e)=>{
    setdisplay(false);
    setinputname(e.target.value);
  }
  const find=()=>{
    setdisplay(true);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type='text' value={inputname} onChange={handlename}/>
      <button onClick={find}>Find user</button>
      {display && <Finduser name={inputname} />}
    </div>
  );
}
