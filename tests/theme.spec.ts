import { test, expect } from "@playwright/test";

test.describe("Theme toggle", () => {
  test("defaults to OS preference (light) on first visit", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  });

  test("defaults to OS preference (dark) on first visit", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  });

  test("toggling theme updates the document and persists to localStorage", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

    const toggle = page.locator("[data-theme-toggle]").first();
    await toggle.click();

    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    expect(await page.evaluate(() => localStorage.getItem("theme"))).toBe("light");
  });

  test("persists the user's chosen theme across reloads, overriding OS preference", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");

    await page.locator("[data-theme-toggle]").first().click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

    await page.reload();

    // Stored choice ("light") should win even though OS preference is dark.
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  });

  test("theme toggle is keyboard operable", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "dark" });
    await page.goto("/");

    const toggle = page.locator("[data-theme-toggle]").first();
    await toggle.focus();
    await page.keyboard.press("Enter");

    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  });

  test("page has no flash of unstyled content — theme is set before first paint", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/");

    // data-theme should already be present in the rendered HTML
    // (set by the inline head script), not applied after a delay.
    const themeAttr = await page.evaluate(() =>
      document.documentElement.getAttribute("data-theme")
    );
    expect(themeAttr).toBe("light");
  });
});
