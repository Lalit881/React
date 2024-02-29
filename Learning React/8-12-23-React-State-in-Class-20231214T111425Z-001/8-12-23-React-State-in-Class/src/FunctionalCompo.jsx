
function getAlert()
{
    alert("This is FUNCTION Component..!");
}


function Test1()
{

   let c=12;
    function getAlert1()
            {
                alert("This is FUNCTION123 Component..!");
            }

    return(
        <>
        
        <button onMouseEnter={getAlert}>Alert Fun1</button>
        <button onDoubleClick={getAlert1}>Alert Fun2</button>
        </>
    )
}

export default Test1;