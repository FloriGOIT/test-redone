
import { useDispatch } from "react-redux";
import { addTask } from "../redux/operationsAsync";

const AddTasksReduxAsync = () => {

        const dispatch = useDispatch();
        const handleSubmit = (e) => {
                e.preventDefault();
                const inputTask = e.currentTarget.elements.inputTask.value.trim();
                dispatch(addTask(inputTask))
                e.currentTarget.reset()
        }
        return (<>

        <form onSubmit={handleSubmit}>
                        <label htmlFor="inputTask">Add new task Redux Async:</label><br/>
                        <input id="inputTask" name="inputTask" type="text" required style={{ width: 400, height: 25, marginRight:15, paddingLeft:15 }} />
                        <button type="submit" style={{ height: 30 }}>Submit</button>
                </form></>

        )
}

export default AddTasksReduxAsync