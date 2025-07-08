
import { useDispatch} from "react-redux";
import { setFilter } from "../redux/filterSliceAsync";



const FilteringTasks = () => {

        const dispatch = useDispatch();
        const logClick = e => dispatch(setFilter({filter:e.target.name}));

        return (<div style={{ display: "flex", flexDirection: "row", gap: 15, height: 30 }} onClick={logClick}>
                <button type="button" name="all">All</button>
                <button  type="button" name="completed">Completed</button>
                <button  type="button" name="pending">Pending</button>
        </div>)
}

export default FilteringTasks