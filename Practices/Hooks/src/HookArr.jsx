import React,{useState} from "react";
import Lalit from "./Usestate";

const friendsArray = [
    {
        name:"Lalit",
        age: 23,
    },
    {
        name:"Neha",
        age: 22,
    },
    {
        name:"Piyush",
        age: 20,
    },
]

const friendsArray1 = [
    {
        id: 1,
        name: "handy",
        age: 19,
        hobbies: ["Cooking", "Reading"],
    },
    {
        id: 2,
        name: "Candy",
        age: 18,
        hobbies: ["Bathing", "Eating"],
    },
    {
        id: 3,
        name: "mandy",
        age: 20,
        hobbies: ["Making Videos", "Dancing", "Coding"],
    },
];


function Arrex(){

    const [arr,setArr] = useState(friendsArray)

    const [arr1,setArr1] = useState(friendsArray1)

    const handleclick=()=>{
        setArr((prevArr)=>[
        ...prevArr,
        {
            name:"Shubham",
            age:25,
        }])
    }
    const handleupdate=()=>{
        setArr([
            { ...arr[0], name: "Purohit" },
            { ...arr[1], name: "Sharma" },
            ...arr.slice(2),
        ])
    }
    const handleupdate1=()=>{
        setArr1([
            { ...arr1[0], name:"Lalit", age:24, hobbies:["Watch Movies"] },
            ...arr1.slice(1),
        ])
    }
    const handleclick1=()=>{
        setArr1((prevArr1)=>[
            ...prevArr1,
            {
                id: 4,
                name: "Lalit",
                age: 20,
                hobbies:[
                    "Video Games",
                    "Watch Movies",
                    "Reading",
                ]

            }
        ])
    }

    // second way
    // const handleupdate=()=>{     
    //     const newArr = [...arr];
    //     newArr[0].name="Purohit";
    //     newArr[1].name="Sharma";
    //     setArr(newArr);
    // }

    //third way
    // const handleupdate = () => {
    //     // Update specific elements in the array
    //     setArr((prevArr) => [
    //       {
    //         ...prevArr[0],
    //         name: "Purohit",
    //       },
    //       {
    //         ...prevArr[1],
    //         name: "Sharma",
    //       },
    //       ...prevArr.slice(2), // Keep the rest of the array unchanged
    //     ]);
    //   };

    //Keep in mind that directly modifying the state in React is not recommended, 
    //so it's better to create a new array with the desired modifications and then set the state with the new array.

    return(
        <div>
            <h2>Adding a new value to array</h2>
            <ul>
                {arr.map((friend,index)=>(
                    <li key={index}>name: {friend.name}<br/>age: {friend.age}</li>
                ))}
            </ul>
            <button onClick={handleclick}>Add New</button>

            <h2>Update the specific value in array</h2>
            <button onClick={handleupdate} >Update</button>



            <h2>Adding a new value in Nestedarray</h2>
            <ul>
                {arr1.map((friend1,index1)=>(
                    <><li key={index1}>id: {friend1.id}<br />
                        name: {friend1.name}<br />
                        age: {friend1.age}<br />
                        hobbies: [{friend1.hobbies[0]}, {friend1.hobbies[1]}, {friend1.hobbies[2]}]
                    </li><br/></>
                ))}
            </ul>
            <button onClick={handleclick1} >Add New</button>


            <h2>Update the specific value in Nestedarray</h2>
            <button onClick={handleupdate1} >Update</button>
        </div>
    )
}

export default Arrex;