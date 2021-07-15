import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Slider from "../carousel/Slider.js";
// import Footer from "../Footer/Footer.js";

describe("Carousel Hover Test", () => {

  test("check Hover", () => {
    render(<Slider />);
    const sliderDiv = screen.getByTestId("slider-container");
    userEvent.hover(sliderDiv);

    const checkButton = screen.getByTestId("MyArrows");
    expect(checkButton).toBeInTheDocument();
  });

  
  test("check Un Hover", () => {
    render(<Slider />);

    const checkButton = screen.queryByTestId("MyArrows");
    expect(checkButton).toBeNull();
  });


});
