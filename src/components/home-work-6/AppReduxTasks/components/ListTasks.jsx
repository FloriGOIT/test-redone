import { useSelector,useDispatch } from "react-redux";
import style from "./appReduxTasks.module.scss"
import { deleteTask, toggleTask,editTask } from "../redux/tasksSlices";
import { useState } from "react";


const ListTasks = () => {
        const [updatedInput, setUpdatedInput] = useState("")
        const tasks = useSelector(state => state.tasks)
        const filter = useSelector(state => state.filter)
        const dispatch = useDispatch();
        const activeL = tasks.filter(task => !task.completed)
        const completedL = tasks.filter(task => task.completed)
        let finalList = [];
        if (filter === "all") {  finalList = tasks };
        if (filter === "active") {  finalList = activeL; }
        if (filter === "completed"){ finalList = completedL};
        const handleInputChange = (e) => {setUpdatedInput(e.target.value);};
        const handleUpdatedInput = (e, taskId) => { e.preventDefault(); dispatch(editTask({ id: taskId, newText: updatedInput }));setUpdatedInput("");  }

        return (<ul className={style.listTasks}>
                <br/>
                {finalList.map((task, index) => <li key={task.id}>
                        <div className={style.textTask}>
                                {task.editing && <form onSubmit={e => handleUpdatedInput(e, task.id)}>
                                        <button type="Submit" style={{marginRight:10}}>Save</button>
                                        <input type="text" name="newInput" value={updatedInput} style={{ width: 900, padding: 10 }} onChange={handleInputChange} />
                                </form>}

                                {!task.editing && <button type="button" onClick={() => { dispatch(editTask({id:task.id})); setUpdatedInput(task.text)  }}>Edit</button>}
                                {!task.editing && <label htmlFor="text">{index + 1}. {task.text}</label>}
                                <input id="text" type="checkBox" checked={task.completed} onChange={() => dispatch(toggleTask(task.id))} style={{ width: "20px", height:"20px"}}/>
                        </div>
                        
                        <button type="button" onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
                        
                </li>)}
 
        </ul>)
}

export default ListTasks

//Sportiva, atletica, feminina, voluptoasa, 1.72cm H, flexibila,immer tanara, ma bucr de viata