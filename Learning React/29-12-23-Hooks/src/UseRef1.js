import React, { useRef } from 'react'

const data = [
    {id:1,title:"Title 1",subtitle:"Subtitle 1"},
    {id:1,title:"Title 2",subtitle:"Subtitle 2"},
    {id:1,title:"Title 3",subtitle:"Subtitle 3"},
    {id:1,title:"Title 4",subtitle:"Subtitle 4"},
]

function UseRef1() {

    const divRef =  useRef();
function test()
{
    
    console.log(divRef)
    console.log(divRef.current)
    divRef.current.style.color = "blue"
}

  return (
    <div>

        <div className='main' ref={divRef} onClick={test}>

            {data.map((t)=>(

                <div className='card'>
                <h2>{t.title}</h2>
                <p>{t.subtitle}</p>
                </div>

            ))}



           

            {/* <div className='card'>
            <h2>Title 2</h2>
                <p>Subtitle 2</p>
                
             </div>


             <div className='card'>
             <h2>Title 3</h2>
                <p>Subtitle 3</p>
            </div> */}

        </div>

     
      
    </div>
  )
}

export default UseRef1
