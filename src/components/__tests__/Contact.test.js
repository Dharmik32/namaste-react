import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
    render(<Contact/>);
    const heading = screen.getByRole('heading');

    // Assertion
    expect(heading).toBeInTheDocument();
})


test("Should load button inside contact us component", () => {
    render(<Contact/>);
    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
})

test("Should load input name inside contact us component", () => {
    render(<Contact/>);
    const inputName = screen.getAllByPlaceholderText("name");

    // Assertion
    expect(inputName[0]).toBeInTheDocument();
})


it("Should load 2 input boxes on the contact us component", () => {
    render(<Contact/>);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // console.log("inputBoxes", inputBoxes.length);

    // Assertion
    expect(inputBoxes.length).toBe(2);
})

// test and it are same it is alias of test