import { render, fireEvent } from '@testing-library/react'
import Task from './Task'
import '@testing-library/jest-dom/extend-expect'

const testTask = {
  id: 1,
  text: 'Test Task',
  day: '2023-04-09',
  reminder: false,
}

describe('Task', () => {
  it('displays task text and day', () => {
    const { getByText } = render(<Task task={testTask} />)
    expect(getByText('Test Task')).toBeInTheDocument()
    expect(getByText('2023-04-09')).toBeInTheDocument()
  })

  it('calls onDelete when the delete icon is clicked', () => {
    const onDeleteMock = jest.fn()
    const { getByLabelText } = render(
      <Task task={testTask} onDelete={onDeleteMock} />
    )
    const deleteIcon = getByLabelText('Delete')
    fireEvent.click(deleteIcon)
    expect(onDeleteMock).toHaveBeenCalledWith(1)
  })

  it('toggles reminder when double-clicked', () => {
    const onToggleMock = jest.fn()
    const { getByText } = render(
      <Task task={testTask} onToggle={onToggleMock} />
    )
    const taskDiv = getByText('Test Task').closest('.task')
    fireEvent.doubleClick(taskDiv)
    expect(onToggleMock).toHaveBeenCalledWith(1)
  })
})
