import { fireEvent, render, screen } from '@testing-library/react';
import NamePasswordForm from '../../components/NamePasswordForm';

const props = {
  fullName: '',
  password: '',
  updateFields: jest.fn(),
};

it('Should render the right contents.', () => {
  render(<NamePasswordForm {...props} />);
  const namePasswordText = screen.getByText(/your account information/i);
  expect(namePasswordText).toBeInTheDocument();
});

it('Should render the inputs for username and password.', () => {
  render(<NamePasswordForm {...props} />);
  const nameInput = screen.getByRole('textbox', {
    name: 'Insert your full name',
  });
  expect(nameInput).toBeInTheDocument();
});

it('Should call the updateFields when the user types in fields.', () => {
  render(<NamePasswordForm {...props} />);
  const nameInput = screen.getByRole('textbox', {
    name: 'Insert your full name',
  });
  fireEvent.change(nameInput, { target: { value: 'calvin corp' } });
  expect(props.updateFields).toBeCalled();
});
