import React,{useState} from "react";



function Task(){
    const [form, setForm] = useState({
        firstname: "Meet",
        lastname: "XYZ",
        email: "m@gmail.com"
    })

    return(
        <div className="App">
            Firstname: <input type="text" value={form.firstname} onChange={(e)=>{
                setForm({
                    ...form,
                    firstname:e.target.value
                })
            }} ></input><br/>
            Lastname: <input type="text" value={form.lastname} onChange={(e)=>{
                setForm({
                    ...form,
                    lastname:e.target.value
                })
            }}/><br/>
            Email: <input type="text" value={form.email} onChange={(e)=>{
                setForm({
                    ...form,
                    email:e.target.value
                })
            }}/><br/>

            {form.firstname} {" "}
            {form.lastname} {" "}
            {form.email} {" "}

        </div>
    )
}

export default Task;