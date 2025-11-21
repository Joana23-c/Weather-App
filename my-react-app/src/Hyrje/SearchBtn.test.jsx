import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { CityProvider } from "../contex/CityContext.jsx";
import SearchBtn from "./SearchBtn.jsx";

// Mock localStorage
beforeAll(() => {
  const localStorageMock = (() => {
    let store = {};
    return {
      getItem: (key) => store[key] || null,
      setItem: (key, value) => {
        store[key] = value.toString();
      },
      clear: () => {
        store = {};
      },
      removeItem: (key) => {
        delete store[key];
      },
    };
  })();

  Object.defineProperty(global, "localStorage", {
    value: localStorageMock,
  });
});

test("renders the search button", () => {
  render(
    <BrowserRouter>
      <CityProvider>
        <SearchBtn />
      </CityProvider>
    </BrowserRouter>
  );

  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
});
