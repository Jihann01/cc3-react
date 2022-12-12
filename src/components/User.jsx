import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/UserSlice";

function User() {

  const [nom] = useState("");
  const [prenom] = useState("");
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  useEffect(()=> {
    const getusers = async () => {
        const user = await axios.get(
          "https://dummyjson.com/users"
        );
        return user.data;
      };
      getusers().then((users) => setUsers(users));
  }, []);
  
  const details = () => {
    if(users.filter(item => item.lastName ===nom && item.firstName===prenom).length){
        dispatch(addUser(users.filter(item => item.firstName===prenom && item.lastName===nom)[0]))
        navigate('/DetailsUser')
    }
  };
  const listetaches =()=>{
    if(users.filter(item => item.lastName ===nom && item.firstName===prenom).length){
      dispatch(addUser(users.filter(item => item.firstName===prenom && item.lastName===nom)[0]))
      navigate('/ListTodo')
  }
  }
  return (
    <div className="logincontainer">
      <div className="user">
      <img className="image" src={require("../images/user.png")} />
        <h3>{nom} - {prenom}</h3>
        <button onClick={details}>Details User</button>
        <button onClick={listetaches}>Liste des Taches</button>
      </div>
    </div>
  );
}
export default User;