import logo from './logo.svg';
import './App.css';
import UseEffectHook from './UseEffectHook';
import UseEffectWithDependencies from './UseEffectWithDependencies';
import UseEffectEx from './UseEffectEx';



function App() {
  return (
    <div>
        <UseEffectHook/>
        {/* <UseEffectWithDependencies/> */}
        <UseEffectEx/>
    </div>
  );
}

export default App;
