//import {todos} from "../data.jsx";
import {useState} from "react";


const About = () => {
    const [todosList, setTodosList] = useState([]);

    return (
        <>
        <h1>I am a passionate developer ready to take up new challenges and help building optimized websites.</h1>
        <button className ="rounded px-4 py-2 m-2 bg-slate-300 cursor-pointer hover:bg-slate-400" 
        onClick={() => import("../data").then(module => setTodosList(module.todos))} >Load data</button>
        <ul>
          {todosList.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
        </>
        
    )
}

export default About;