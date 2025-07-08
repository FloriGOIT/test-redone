import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTask } from '../redux/tasksSlices';
import style from "./appReduxTasks.module.scss"

const AddTask = () => {

  const dispatch = useDispatch();
  const newItem = ()=>{return { id: nanoid(), text: '', completed: false, editing:false };}

  const handleNewTask = e => {
    e.preventDefault();
    const inputForm = e.currentTarget.elements.input.value;
    const itemToAdd = { ...newItem(), text: inputForm }
    dispatch(addTask(itemToAdd));
    e.target.reset();
  };


  return (
    <>
      <br />
      <h3>Add a new task</h3>
      <form onSubmit={handleNewTask}>
        <input className={style.formInput} name="input" type="text" style={{width: 900, padding: 10}} />
        <button type="submit" style={{ marginLeft: 15, color: 'blue' }}>
          Commit
        </button>
      </form>
    </>
  );
};

export default AddTask;
