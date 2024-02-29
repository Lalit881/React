import React from 'react'

function TestLists() {

   let x=2;

const arr =[1,2,3];


    // for(let i=1;i<=10;i++)
    // {
    //     arr.push(<li>{i} List 1</li>)
    // }

    // console.log(arr)

    // arr.reduce(cur,next)
    // {
    //     console.log(cur+next)
    // }


  return (
    <div>
        <ul>
        {arr.map((v,i)=>{
          return(
            <li key={i}>{v}</li>
          )
        })}
        </ul>

        
    </div>
  )
}

export default TestLists
