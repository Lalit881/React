import React from 'react'


function CreateConnection(server,room) {
  return {

    connect()
    {
        console.log("Connected to " + room + " at " + server)
    },

    disconnect()
    {
        console.log("Disonnected from " + room + " at " + server)
    }

  }
}

export default CreateConnection
