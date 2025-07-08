import CountingTasks from "./CountingTasks"
import FilteringTasks from "./FilteringTasks"

const FilterForTasks = () => {
        
        return (<section style={{display:"flex", flexDirection:"row", justifyContent:"space-between", backgroundColor:"beige"}}>
                <CountingTasks />
                <FilteringTasks/>
        </section>)
}
export default FilterForTasks