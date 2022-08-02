import './App.css';
// import Hooks from './Components/Hooks'
// import ArrayHook from './Components/ArrayHook'
// import ObjectHook  from './Components/ObjectHook'
//import LoginForm from './Components/LoginForm';
//import UseEfeectHook  from './Components/UseEffectHook'
//import UseEffect2 from './Components/UseEffect2';
//import UseEffectApi from './Components/UseEffectApi'
//import UseReducerHook from './Components/UseReducerHook'
//import Component1 from './Components/UseContext/Component1'
// import UseLocationHook from './Components/UseLocation'
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Todo from './Components/TodoList/todo'

function App() {
  return (
    <div className="App">
    {/* <ObjectHook/>
    <ArrayHook/> */}
    {/* <Router>
      <Routes>
      <Route path="/" element={<LoginForm/> } />
        <Route path="/useEfeectApi" element={<UseEffectApi/> } />
      </Routes>
    </Router> */}
    
  {/* <UseEfeectHook/> */}
    {/* <UseEffect2/> */}
    {/* <UseEffectApi/> */}
    {/* <UseReducerHook/> */}
    {/* <Component1/> */}
    {/* <UseLocationHook/> //it will work with router */}
    <Todo/>

    </div>
  );
}

export default App;
