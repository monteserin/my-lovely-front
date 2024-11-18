import axios from 'axios';
const i = axios.create({
  baseURL: 'http://localhost:8080'
});

export const login = async ({username, password}) =>{

  const token = btoa(username + ':' + password);
  console.log('11111111111', token)
  const response =  await i.post('/login', {},
  {
    headers: {  
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + token
    }
  }
);
setAuth(token);
return response.data;
}

export const getUsers = async () =>{
   const response = await i.get('/users/');
   return response.data;
}

 const setAuth = async (token) => {
  console.log('aaaaaaaaaaaaaaaaaaaaaaa', token)
    i.defaults.headers.common.Authorization = `basic ${token}`;
};

export const sendMessages =async (senderId, userIds, message) => {

await i.post('/messages/', {senderId, userIds, message});
}


export const getMessagesByUserId = async (userId) =>{
   const response = await i.get('/messages/'+userId);
   return response.data;
}