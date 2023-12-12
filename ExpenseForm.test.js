import { render, screen } from "@testing-library/react";
import ExpenseForm from "./ExpenseForm"
import Signup from "./Signup";

test('renders amount as a text',() => {
    render(<ExpenseForm />);
    const amountElement = screen.getByText('Amount');
    expect(amountElement).toBeInTheDocument();
})
test('renders description as a text',() => {
    render(<ExpenseForm />);
    const amountElement = screen.getByText('Description');
    expect(amountElement).toBeInTheDocument();
})
test('renders category as a text',() => {
    render(<ExpenseForm />);
    const amountElement = screen.getByText('Category');
    expect(amountElement).toBeInTheDocument();
})
test('renders Add as a text',() => {
    render(<ExpenseForm />);
    const amountElement = screen.getByText('Add');
    expect(amountElement).toBeInTheDocument();
})
test('renders Download as a text',() => {
    render(<ExpenseForm />);
    const amountElement = screen.getByText('Download');
    expect(amountElement).toBeInTheDocument();
})
test('renders Your email as a text',() => {
    render(<Signup />);
    const amountElement = screen.getByText('Your Email');
    expect(amountElement).toBeInTheDocument();
})
test('renders Your Password as a text',() => {
    render(<Signup />);
    const amountElement = screen.getByText('Your Password');
    expect(amountElement).toBeInTheDocument();
})
test('renders Login as a text',() => {
    render(<Signup />);
    const amountElement = screen.getByText('Login');
    expect(amountElement).toBeInTheDocument();
})
test('renders Sign Up as a text',() => {
    render(<Signup />);
    const amountElement = screen.getByText('Sign Up');
    expect(amountElement).toBeInTheDocument();
})
test('renders Forgot Password? as a text',() => {
    render(<Signup />);
    const amountElement = screen.getByText('Forgot Password?');
    expect(amountElement).toBeInTheDocument();
})
