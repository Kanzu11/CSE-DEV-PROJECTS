function Tasks({ tasks, toggleTask, deleteTask, editTask }) {
  return (
    <div className="check">
      <ul className="list-container">
        {tasks.map(task => (
          <li key={task.id} className="checkbox">
            <input
              className="cb"
              type="checkbox"
              id={task.id}
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <label
              htmlFor={task.id}
              className={`task-text ${task.completed ? 'completed' : ''}`}
            >
              {task.text}
            </label>
            <div className="cbs">
            
              <svg
                className="edit-icon"
                onClick={() => editTask(task.id)}
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                <path d="m15 5 4 4"></path>
              </svg>
             
              <svg
                className="delete-icon"
                onClick={() => deleteTask(task.id)}
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                <line x1="10" x2="10" y1="11" y2="17"></line>
                <line x1="14" x2="14" y1="11" y2="17"></line>
              </svg>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks;