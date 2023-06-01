import { render, fireEvent } from '@testing-library/react'
import AddTask from './AddTask'

describe('AddTask', () => {
  it('calls onAdd with valid input', () => {
    const onAddMock = jest.fn()
    const { getByLabelText, getByText } = render(<AddTask onAdd={onAddMock} />)

    const taskInput = getByLabelText('Task')
    const dateInput = getByLabelText('Date & Time')
    const reminderCheckbox = getByLabelText('Set Reminder')
    const submitButton = getByText('Save Task')

    fireEvent.change(taskInput, { target: { value: 'Test Task' } })
    fireEvent.change(dateInput, { target: { value: '2023-04-09' } })
    fireEvent.click(reminderCheckbox)
    fireEvent.click(submitButton)

    expect(onAddMock).toHaveBeenCalledWith({
      text: 'Test Task',
      day: '2023-04-09',
      reminder: true,
    })
  })
})

