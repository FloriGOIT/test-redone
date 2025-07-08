import style from "./appReduxTasks.module.scss"
import { useSelector } from "react-redux";

const Counter = () => {
        const date = new Date().toLocaleDateString("en-En", {
                month: "long",
                day: "numeric",
                year: "numeric",
        });
        const tasks = useSelector(state => state.tasks)
        const countTasks = tasks.length;
        const countTasksactive = tasks.filter(task => task.completed === false).length;
        const countTasksInactive = countTasks - countTasksactive;

        return <div className={style.taskCounter}>
                <h2><i>{date}</i></h2><br/>
                <h3>Tasks: { countTasks}</h3>
                <span>Active: <b>{countTasksactive}</b></span><br/>
                <span>Completed: <b>{countTasksInactive}</b></span>
  </div>;
};

export default Counter;
