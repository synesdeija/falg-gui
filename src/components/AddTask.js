import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('you must add a task')
      return
    }
    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <form
      className="add-form"
      onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="task-input">Task</label>
        <input
          id="task-input"
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="date-input">Date & Time</label>
        <input
          id="date-input"
          type="day"
          placeholder="Add Date & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="reminder-checkbox">Set Reminder</label>
        <input
          id="reminder-checkbox"
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
        <input
          type="submit"
          value="Save Task"
          className="btn btn-block"
        />
      </div>
    </form>
  )
}

export default AddTask
