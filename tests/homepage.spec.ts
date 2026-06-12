import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads and renders all main sections", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("section.hero")).toBeVisible();
    await expect(page.locator("section#work")).toBeVisible();
    await expect(page.locator("section#about")).toBeVisible();
    await expect(page.locator("section#contact")).toBeVisible();
  });

  test("portfolio grid links to case studies", async ({ page }) => {
    await page.goto("/");

    const cards = page.locator(".portfolio__card");
    await expect(cards.first()).toBeVisible();
    expect(await cards.count()).toBeGreaterThan(0);

    const firstHref = await cards.first().getAttribute("href");
    expect(firstHref).toMatch(/^\/projects\/[a-z0-9-]+$/);
  });

  test("skip-to-content link is the first focusable element", async ({ page }) => {
    await page.goto("/");

    // Press Tab once from a fresh page load.
    await page.keyboard.press("Tab");

    const focused = page.locator(":focus");
    await expect(focused).toHaveClass(/skip-link/);
    await expect(focused).toHaveAttribute("href", "#main");
  });

  test("skip link jumps to main content", async ({ page }) => {
    await page.goto("/");

    const skipLink = page.locator(".skip-link");
    await skipLink.focus();
    await skipLink.click();

    await expect(page).toHaveURL(/#main$/);
  });

  test("every image on the homepage has alt text", async ({ page }) => {
    await page.goto("/");

    const images = page.locator("img");
    const count = await images.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt, `image ${i} is missing alt text`).not.toBeNull();
    }
  });

  test("has a single h1 and correct document language", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    expect(await page.locator("h1").count()).toBe(1);
  });
});
