import AddContact from "./home-work-6/AppReduxAgenda/components/AddContact"
import style from "./Home-work-6/AppReduxAgenda/components/apReduxAgenda.module.scss"
import CountContacts from "./home-work-6/AppReduxAgenda/components/CountContacts"
import ListTheContacs from "./home-work-6/AppReduxAgenda/components/ListTheContacts"

const AppReduxAgenda = () => {


        return (<section className={style.reduxAgenda}>
                <CountContacts /><br/>
                <AddContact /><br />
                <ListTheContacs/>
                
        </section>)
}
export default AppReduxAgenda