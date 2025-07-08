import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleTasks } from '../redux/selectorsAsync';
import { deleteTask, toggleTask } from '../redux/operationsAsync';



const ListTasksAsync = () => {
  const tasks = useSelector(selectVisibleTasks);
  const dispatch = useDispatch();
        
        const handleDelete = (task) => { dispatch(deleteTask(task))}
  return (
    <>
      <br />
      <ul style={{ listStyleType: 'none' }}>
        {tasks.map((task, index) => (
          <li
            key={task.id}
            style={{ display: 'flex', flexDirection: 'row', gap: 10 }}
          >
            <button type="button" onClick={()=>handleDelete(task)}>Delete</button>
            <p>
              {index + 1}. {task.text}{' '}
            </p>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                dispatch(toggleTask(task));
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListTasksAsync;
