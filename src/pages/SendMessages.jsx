import { useEffect, useState } from "react";
import { getUsers, sendMessages } from "../services/api";
import {useUserContext} from "../providers/UserProvider";

const SendMessages = () => {
const [users, setUsers] = useState();
const [message, setMessage] = useState();
const [checkedUsers, setCheckedUsers] = useState([]);
const {user} = useUserContext();


  useEffect( () =>{
getUsers().then(data => {
  setUsers(data);
})
  },[])

const handleClick = () => {
  sendMessages(user.id, checkedUsers, message);
}
  return (
    <div>
     {
      users?.map( u => (<li key={u.id}><input type="checkbox" onChange={(e) => {
  if (e.target.checked) {
    setCheckedUsers([...checkedUsers, u.id]);
  } else {
    setCheckedUsers(checkedUsers.filter(id => id !== u.id));
  }
}} /> {u.username}</li>))
     }

     <textarea onChange={(e) => setMessage(e.target.value)}></textarea>

     <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default SendMessages;