import React from "react";
import { render, fireEvent, screen } from "@testing-library/react"; 
import "@testing-library/jest-dom/extend-expect";
import Code from "../components/Code/Code"; 
import AddCodePage from "../components/AddCodePage/AddCodePage";
import { MemoryRouter } from "react-router-dom"; 
import codeStore from "../store/codeStore";
import { Provider } from 'mobx-react';

const mockRegenerateCode = jest.fn();

describe("Code component", () => {
  test("renders the code name and number", () => {
    const code = { name: "Test Code", number: "123456" };
    render(<Code code={code} regenerateCode={mockRegenerateCode} />);

    expect(screen.getByText("Test Code")).toBeInTheDocument();
    expect(screen.getByText("123456")).toBeInTheDocument();
  });
});

describe("AddCodePage component", () => {
  test("renders the AddCodePage component and adds a new code", () => {
    codeStore.codes = [];

    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter> 
        <Provider codeStore={codeStore}>
          <AddCodePage />
        </Provider>
      </MemoryRouter>
    );

    const input = getByPlaceholderText("Code Name");
    const addButton = getByText("Add");

    fireEvent.change(input, { target: { value: "New Code" } });
    fireEvent.click(addButton);

    expect(codeStore.codes.length).toBe(1);
    expect(codeStore.codes[0].name).toBe("New Code");
  });
});

