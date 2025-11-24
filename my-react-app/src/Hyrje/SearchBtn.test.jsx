import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";



vi.mock("../Weather_card/Cards.jsx", () => ({
  default: () => <div>Cards</div>
}));

vi.mock("../Ls_list.jsx", () => ({
  default: () => <div>List</div>
}));

import SearchBtn from "./SearchBtn.jsx";

test("renders search image button", () => {
  render(
      <SearchBtn />
  );

  const searchImg = screen.getByAltText("search");
  expect(searchImg).toBeInTheDocument();
});
