import React, { useEffect, useState } from 'react'
import CreateConnection from './CreateConnection';


function ChatRoom({room}) {

    const [server,setServer] = useState("http://localhost/1234/");
    
  
    useEffect(()=>{

        const connection = CreateConnection(server,room);
        connection.connect();

        return ()=>{
            connection.disconnect();
        }


    },[server,room])

  return (
    <div>
      
    </div>
  )
}

function Chat()
{

    const [roomId,setRoomId] = useState("general")
    return(
        <>
            Choose Chat: <select onChange={(e)=>{setRoomId(e.target.value)}}>
                <option>General</option>
                <option>Travel</option>
                <option>Music</option>
            </select>
            <ChatRoom room={roomId}/>
            {roomId}
        
        </>
    )
}



export default Chat
