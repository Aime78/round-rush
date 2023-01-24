import { fireEvent, render, screen } from '@testing-library/react';
import EmailForm from '../../components/Registration/EmailForm';

const props = {
  email: '',
  updateFields: jest.fn(),
};

it('Should render the right contents.', () => {
  render(<EmailForm {...props} />);
  const emailText = screen.getByText(/your email first/i);
  expect(emailText).toBeInTheDocument();
});

it('Should render the email input field', () => {
  render(<EmailForm {...props} />);
  const emailInput = screen.getByRole('textbox', {
    name: 'Insert your email',
  });
  expect(emailInput).toBeInTheDocument();
});

it('Should call the updateFields when the user types in field.', () => {
  render(<EmailForm {...props} />);
  const emailInput = screen.getByRole('textbox', {
    name: 'Insert your email',
  });
  fireEvent.change(emailInput, { target: { value: 'calvin corp' } });
  expect(props.updateFields).toBeCalled();
});
