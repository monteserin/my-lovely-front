import { useEffect, useState } from "react";
import { getMessagesByUserId } from "../services/api";
import { useUserContext } from "../providers/UserProvider";

const SeeMessages = () => {
  const {user} = useUserContext();
const [messages, setMessages] = useState();
  useEffect( () => {
getMessagesByUserId(user.id).then(data => {
setMessages(data);
})
  },[])
  return (
    <div>
      {
        messages?.map( m => (<li key={m.id}>{m.message}</li>))
      }
    </div>
  );
};

export default SeeMessages;