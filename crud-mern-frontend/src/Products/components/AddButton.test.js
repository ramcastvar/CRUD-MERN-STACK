import { render, screen, fireEvent } from '@testing-library/react'
import AddButton from './AddButton'

describe('<Add />', () => {
    test('Renders the AddButton', () => {
        render(<AddButton />)
        const buttonElement = screen.getByText(/Add/i)
        expect(buttonElement).toBeInTheDocument()
    })

    test('Add a new element when the button is clicked', () => {
      render(<AddButton />)
      const buttonElement = screen.getByRole('button', { name: /Add/i })
      fireEvent.click(buttonElement)
      
      const updatedButton = screen.getByRole('button', { onClick: true })
      expect(updatedButton).toBeInTheDocument()
    })
})
