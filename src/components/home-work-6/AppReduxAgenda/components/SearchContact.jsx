
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteringContacts } from "../redux/filterSlice";


const SearcContacts = () => {
        const filter = useSelector(state=>state.filterAgendaRedux )
 const [searchInput,setSearchInput]=useState(filter)
        const dispatch = useDispatch();
        useEffect(() => {
                const id = setTimeout(() => {
                  dispatch(filteringContacts(searchInput));
                }, 300); // 300ms debounce
                return () => clearTimeout(id);
              }, [searchInput, dispatch]);

        return <input type="text" name="searchInput" onChange={e => setSearchInput(e.target.value.toLowerCase())} style={{width:"400px", height:"20px", margin:"10px 0px 20px 0px"}} />
}
export default SearcContacts

