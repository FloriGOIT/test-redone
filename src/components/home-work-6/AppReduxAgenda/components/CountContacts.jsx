import style from "./apReduxAgenda.module.scss";
import { useSelector } from "react-redux";



const CountContacts = () => {
        const data = new Date().toLocaleDateString("ro-ro", {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday:"long"
        })
        
        const contactsState = useSelector(state => state.agendaRedux);

        return (
                <div className={style.countContacts}>
                        <h3 style={{color:"blue"}}><i>{data}</i></h3>
                        <br/>
                        <h4>Number of contacts: {contactsState.length || 0}</h4>
                </div>
        )
}


export default CountContacts