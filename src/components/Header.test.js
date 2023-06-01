import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import Header from './Header'

describe('Header', () => {
  it('renders header with a title', () => {
    render(
      <MemoryRouter>
        <Header title="Test Title" />
      </MemoryRouter>
    )
    const headerElement = screen.getByRole('heading', { name: /Test Title/i })
    expect(headerElement).toBeInTheDocument()
  })

  it('renders add button when on homepage', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header
          onAdd={() => {}}
          showAdd={false}
        />
      </MemoryRouter>
    )
    const buttonElement = screen.getByRole('button', { name: /add/i })
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders close button when add form is open', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header
          onAdd={() => {}}
          showAdd={true}
        />
      </MemoryRouter>
    )
    const buttonElement = screen.getByRole('button', { name: /close/i })
    expect(buttonElement).toBeInTheDocument()
  })
})
