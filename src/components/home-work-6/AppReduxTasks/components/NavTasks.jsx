import style from "./appReduxTasks.module.scss"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filteringTask } from "../redux/filtersSlice";

const NavTasks = () => {
        const filter = useSelector(state => state.filter);
        const dispatch = useDispatch();
        const handleBtn = event => {dispatch(filteringTask(event.target.name))}

        return (
                <div className={style.mainTasks}>
                        <button  type="button" name="all" onClick={handleBtn}  className={filter==="all"? style.selected : style.filtering}>All</button>
                        <button type="button" name="active" onClick={handleBtn} className={filter==="active"? style.selected : style.filtering}>Active</button>
                        <button type="button" name="completed" onClick={handleBtn} className={filter==="completed"? style.selected : style.filtering}>Completed</button>
                </div>
        )
}

export default NavTasks