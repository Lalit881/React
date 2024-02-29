import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import ClassCompo from './ClassCompo';
import TestLists from './TestLists';
import PropEx1 from './PropEx1';
import ClassCompoProp from './ClassCompoProp';
import FunctionProp from './FunctionProp';
import FunctionPropEx from './FunctionPropEx';
import ClassCompoPropEx from './ClassCompoPropEx';


function App() {
  return (
    <div className="App">
      <TestLists/>
      {/* <FunctionPropEx prop={12}/> */}
      {/* <FunctionPropEx prop={"df"}/> */}
      {/* <FunctionPropEx prop={[1,2,3]}/> */}
      {/* <FunctionPropEx prop={{n:1}}/> */}
      {/* <FunctionPropEx prop={false}/> */}
      <ClassCompoPropEx />
    </div>
  );
}

export default App;
