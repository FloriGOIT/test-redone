import { useSelector } from "react-redux"
import { selectTasks } from "../redux/selectorsAsync"

const CountingTasks = () => {
        const date = new Date().toLocaleDateString("ro-Ro", {
                year: "numeric",
                month: "long",
                day:"numeric"

        })
        
        const tasks = useSelector(selectTasks);
        const completedT = tasks.filter(task => task.completed)

 
        return (
                <div style={{ display: "flex", flexDirection: "column", marginBottom: 20, gap: 10}}>
                        <h2>{date}</h2>
                        <span>All tasks: {tasks.length}</span>
                        <span>Completed tasks: {completedT.length}</span>
                        <span>Pending tasks: {tasks.length - completedT.length}</span>
                </div>
        )
 }

export default CountingTasks

