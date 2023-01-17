import { fireEvent, render, screen } from '@testing-library/react';
import CompanyInfoForm from '../../components/CompanyInfoForm/index';

const props = {
  companyName: 'calvin',
  spaceName: 'calvin corp',
  industry: 'software',
  employees: '1-10',
  doescompanyExist: false,
  updateFields: jest.fn(),
};

it('Should render the right contents.', () => {
  render(<CompanyInfoForm {...props} />);
  const companySpaceText = screen.getByText(/your company/i);
  expect(companySpaceText).toBeInTheDocument();
});

it('Should render the inputs for company registration.', () => {
  render(<CompanyInfoForm {...props} />);
  const companyNameInput = screen.getByRole('textbox', {
    name: 'company name',
  });
  expect(companyNameInput).toBeInTheDocument();
});

it('Should call the updateFields when the user types in fields.', () => {
  render(<CompanyInfoForm {...props} />);
  const companyNameInput = screen.getByRole('textbox', {
    name: 'company name',
  });
  fireEvent.change(companyNameInput, { target: { value: 'calvin corp' } });
  expect(props.updateFields).toBeCalled();
});
