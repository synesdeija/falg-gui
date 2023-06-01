import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        </li>
      ))}
    </ul>
  )
}

export default Tasks
