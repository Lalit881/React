import React from 'react'
import { useState } from 'react';
function Form_object() {
    const [form,setForm] =  useState({
        firstname: "Meet",
        lastname: "XYZ",
        email :"m@gmail.com"
      })
  return (
    <div>

Firstname : <input value={form.firstname} onChange={(e)=>{
        setForm({
          ...form,
          firstname:e.target.value
        })
      }}></input> <br></br>
      Lastname : <input value={form.lastname} onChange={(e)=>{
        setForm({
          ...form,
          lastname:e.target.value
        })
      }}></input> <br></br>
      Email : <input value={form.email} onChange={(e)=>{
        setForm({
          ...form,
          email:e.target.value
        })
      }}></input> <br></br>

      {form.firstname} {" "}
      {form.lastname}  {" "}

      {form.email}
      
    </div>
  )
}

export default Form_object
