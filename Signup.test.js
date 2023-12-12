import { render, screen } from "@testing-library/react"
import Signup from "./Signup"
import userEvent from "@testing-library/user-event"

test('renders SignUp heading text',() => {
    render(<Signup />);

    const buttonElement = screen.getByText(`Don't have account? Sign Up`);
    userEvent.click(buttonElement);

    const outputElement = screen.getByText('SignUp')
    expect(outputElement).toBeInTheDocument();
})

test('renders Your Email heading text',() => {
    render(<Signup />);

    const buttonElement = screen.getByText(`Don't have account? Sign Up`);
    userEvent.click(buttonElement);

    const outputElement = screen.getByText('Your Email')
    expect(outputElement).toBeInTheDocument();
})

test('renders Your Password heading text',() => {
    render(<Signup />);

    const buttonElement = screen.getByText(`Don't have account? Sign Up`);
    userEvent.click(buttonElement);

    const outputElement = screen.getByText('Your Password')
    expect(outputElement).toBeInTheDocument();
})

test('renders Confirm Password heading text',() => {
    render(<Signup />);

    const buttonElement = screen.getByText(`Don't have account? Sign Up`);
    userEvent.click(buttonElement);

    const outputElement = screen.getByText('Confirm Password')
    expect(outputElement).toBeInTheDocument();
})

test('renders Login heading text',() => {
    render(<Signup />);

    const buttonElement = screen.getByText('Have an account? Login');
    userEvent.click(buttonElement);

    const outputElement = screen.getByText('Login')
    expect(outputElement).toBeInTheDocument();
})

test('renders Your Email heading text',() => {
    render(<Signup />);

    const buttonElement = screen.getByText('Have an account? Login');
    userEvent.click(buttonElement);

    const outputElement = screen.getByText('Your Email')
    expect(outputElement).toBeInTheDocument();
})

test('renders Your Password heading text',() => {
    render(<Signup />);

    const buttonElement = screen.getByText('Have an account? Login');
    userEvent.click(buttonElement);

    const outputElement = screen.getByText('Your Password')
    expect(outputElement).toBeInTheDocument();
})

test('renders Forgot Password? heading text',() => {
    render(<Signup />);

    const buttonElement = screen.getByText('Have an account? Login');
    userEvent.click(buttonElement);

    const outputElement = screen.getByText('Forgot Password?')
    expect(outputElement).toBeInTheDocument();
})
