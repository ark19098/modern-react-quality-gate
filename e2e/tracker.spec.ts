import { expect, test } from "@playwright/test";

test.describe("Daily Run Tracker", () => {
	test("User can see their distance and goal achievement", async ({ page }) => {
		// 1. Robot opens the browser and goes to your local app
		await page.goto("http://localhost:5173");

		// 2. Robot expects the title to be visible
		await expect(page.getByRole("heading", { name: "Daily Run" })).toBeVisible();

		// 3. Robot verifies the distance logic is rendered on screen
		const distanceText = await page.getByTestId("distance").textContent();
		expect(Number(distanceText)).toBeGreaterThanOrEqual(10);

		// 4. Robot checks if the success UI triggered
		await expect(page.getByText("Goal Achieved!")).toBeVisible();
	});
});
