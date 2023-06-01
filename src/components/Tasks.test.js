import { render, screen, fireEvent } from '@testing-library/react';
import Tasks from './Tasks';

describe('Tasks', () => {
  const tasks = [
    {
      id: 1,
      text: 'Test Task 1',
      day: '2023-04-09',
      reminder: true,
    },
    {
      id: 2,
      text: 'Test Task 2',
      day: '2023-04-10',
      reminder: false,
    },
  ];

  it('renders all tasks', () => {
    render(<Tasks tasks={tasks} />);
    const taskElements = screen.getAllByRole('listitem');
    expect(taskElements.length).toBe(tasks.length);
  });

  it('calls onDelete when the delete icon is clicked', () => {
    const onDeleteMock = jest.fn();
    render(<Tasks tasks={tasks} onDelete={onDeleteMock} />);
    const deleteIcon = screen.getAllByLabelText('Delete')[0];
    fireEvent.click(deleteIcon);
    expect(onDeleteMock).toHaveBeenCalledWith(tasks[0].id);
  });

  // it('calls onToggle when a task is double-clicked', () => {
  //   const onToggleMock = jest.fn();
  //   render(<Tasks tasks={tasks} onToggle={onToggleMock} />);
  //   const taskElement = screen.getAllByRole('listitem')[0];
  //   fireEvent.doubleClick(taskElement);
  //   expect(onToggleMock).toHaveBeenCalledWith(tasks[0].id);
  // });
});
