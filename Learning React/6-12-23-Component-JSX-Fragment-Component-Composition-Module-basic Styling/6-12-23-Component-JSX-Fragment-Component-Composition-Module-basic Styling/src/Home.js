
function simplefun()
{
    alert("Hello Alert...!")
}

function Compo1()
{
    const x=12;



    
function simplefun123()
{
    alert("Hello Alert 123...!")
}


    return(
        <>
        {x}
            This is Compo1
            <h4>{x}</h4>

            <button onClick={simplefun123}>Click Fun </button>
        </>
    )
}



function Test(x)
{
    return (
        <>
        
        <h1 onClick={simplefun}>This is FUNCTIONAL Component</h1>
        <Compo1/>
        </>
    );
}

export default Test;