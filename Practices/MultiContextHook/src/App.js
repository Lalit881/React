import './App.css';
import { useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';

const themeContext = createContext();
const userContext = createContext();



function App() {
  
  const [theme,setTheme] = useState("light")
  const [user,setUser] = useState("")
  

  return (
    <div className='App'>
      <themeContext.Provider value={theme} >
        <userContext.Provider value={{user,setUser}}>
          <WelcomePanel>
            <Panel title={"Welcome"}>
              <Login/> 
            </Panel>
          </WelcomePanel>
        </userContext.Provider>
      </themeContext.Provider>
      <input type='checkbox'
      onChange={(e)=>(setTheme(e.target.checked? "dark" : "light") )}
      ></input>
      {console.log(setTheme)}
      {theme} mode

    </div>
  );
}

function Login() {

  const {setUser} = useContext(userContext); // only setUser value use for button click in object becase value is also in object
  const [fname,setFname] = useState("")
  const [lname,setLname] = useState("")

  const canLogin = fname!=="" && lname!==""

  return (
    <div>
      <div>
        <labe>FirstName : </labe>
        <input
         type='text'
         value={fname}
         onChange={(e)=>(setFname(e.target.value))}
         ></input>
      </div>
      <div>
        <labe>LastName : </labe>
        <input         
         type='text'
         value={lname}
         onChange={(e)=>(setLname(e.target.value))}></input>
      </div>
        <Button onclick={()=>{setUser({name:fname + " " +lname})}} disabled={!canLogin}>
            Login
        </Button>

    </div>
  )
}

function Button({children , disabled , onclick}) {

  const theme = useContext(themeContext)
  const className = "panel-" + theme ;
  return(
    <>
      <button onClick={onclick} className={className} disabled={disabled} >{children}</button>
    </>
  )
}

function Panel({title,children}) {
  const {user} = useContext(userContext)
  return(
    <section>
      <h1>{title} {user.name}</h1>
      {children}
    </section>
  )
}
function WelcomePanel({children}){

  const theme = useContext(themeContext)
  const className = "panel-" + theme ;
  return(
    <div className={className} >
      {children}
    </div>
  )
}
export default App;
