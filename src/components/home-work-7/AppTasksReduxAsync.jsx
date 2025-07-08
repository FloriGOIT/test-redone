import { Provider, useDispatch } from 'react-redux';
import storeAsync from './redux/storeAsync';
import ListTasksAsync from "./components/ListTasksAsync"
import { useEffect } from 'react';
import {fetchTasks} from './redux/operationsAsync';
import AddTasksReduxAsync from './components/AddTasksAsync';
import FilterForTasks from "./components/FilterForTasks"




const AppTasksAsyncRedux = () => {
        const dispatch = useDispatch();
        useEffect(() => { dispatch(fetchTasks()) }, [dispatch])
     
        return (<div>
       
          <FilterForTasks/>
          <AddTasksReduxAsync/>
          <ListTasksAsync />

        </div>)
}

const AppTasksAsyncReduxStore = () => {
  return (
    <Provider store={storeAsync}>
      <AppTasksAsyncRedux />
    </Provider>
  );
};

export default AppTasksAsyncReduxStore;

