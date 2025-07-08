import Counter from './components/Counter';
import NavTasks from './components/NavTasks';
import style from './Home-work-6/AppReduxTasks/components/appReduxTasks.module.scss';
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";

const AppReduxTasks = () => {
  return (
    <div className={style.appReduxTasks}>
      <section className={style.headerTasksApp}>
        <Counter />
        <NavTasks />
      </section>

                  <section className={style.tasks}>
                         
                          <AddTask />
                          <ListTasks/>
      </section>
    </div>
  );
};

export default AppReduxTasks;
