import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button";

describe("Button", () => {
  test("renders without crashing", () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("displays the correct text", () => {
    const component = renderer.create(<Button text="Click me" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("calls onClick prop when button is clicked", () => {
    const mockOnClick = jest.fn();
    const component = renderer.create(<Button onClick={mockOnClick} />);
    const tree = component.toJSON();
    tree.props.onClick();
    expect(mockOnClick).toHaveBeenCalled();
  });

  test("uses the default color if no color prop is passed", () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();
    expect(tree.props.style).toEqual({
      backgroundColor: "steelblue",
    });
  });

  test("uses the specified color if color prop is passed", () => {
    const component = renderer.create(<Button color="green" />);
    const tree = component.toJSON();
    expect(tree.props.style).toEqual({
      backgroundColor: "green",
    });
  });

  test("validates props using PropTypes", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    const component = renderer.create(<Button text={5} />);
    const tree = component.toJSON();
    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls[0][0]).toMatch("Warning: Failed %s type: %s%s");
    spy.mockRestore();
  });
  
});
