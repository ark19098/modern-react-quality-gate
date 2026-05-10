import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/vitest";
import { describe, expect, it } from "vitest";
import { Tracker } from "./Tracker";

describe("Tracker Component", () => {
	it("renders the correct distance", () => {
		render(<Tracker distance={10} />);
		expect(screen.getByTestId("distance")).toHaveTextContent("10");
	});

	it("shows success message when distance is 10km or more", () => {
		render(<Tracker distance={10} />);
		expect(screen.getByText(/Goal Achieved!/i)).toBeDefined();
	});
});
