import { test, expect } from "@playwright/test";

test.describe("Mobile navigation", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("hamburger menu opens and closes", async ({ page }) => {
    await page.goto("/");

    const hamburger = page.locator("[data-hamburger]");
    const links = page.locator("[data-navbar-links]");

    await expect(hamburger).toBeVisible();
    await expect(links).not.toHaveClass(/navbar__links--open/);

    await hamburger.click();
    await expect(links).toHaveClass(/navbar__links--open/);
    await expect(hamburger).toHaveClass(/navbar__hamburger--open/);

    await hamburger.click();
    await expect(links).not.toHaveClass(/navbar__links--open/);
  });

  test("clicking a nav link closes the menu and navigates", async ({ page }) => {
    await page.goto("/");

    await page.locator("[data-hamburger]").click();
    await expect(page.locator("[data-navbar-links]")).toHaveClass(/navbar__links--open/);

    await page.locator('[data-navbar-links] a[href="/#about"]').click();

    await expect(page.locator("[data-navbar-links]")).not.toHaveClass(/navbar__links--open/);
    await expect(page).toHaveURL(/#about$/);
  });
});

test.describe("Routing", () => {
  test("404 page renders for unknown routes", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);

    await expect(page.locator(".error__code")).toHaveText("404");
    await expect(page.getByRole("link", { name: /back to homepage/i })).toBeVisible();
  });

  test("direct navigation to a case study URL loads without a 404", async ({ page }) => {
    const response = await page.goto("/projects/harvest");
    expect(response?.status()).toBe(200);

    await expect(page.locator(".pd__title")).toBeVisible();
  });

  test("reloading a case study page works", async ({ page }) => {
    await page.goto("/projects/reconmatic");
    await expect(page.locator(".pd__title")).toBeVisible();

    await page.reload();
    await expect(page.locator(".pd__title")).toBeVisible();
  });

  test("all internal navigation links resolve with a 200 response", async ({ page, request }) => {
    await page.goto("/");

    const hrefs = await page.$$eval("a[href]", (anchors) =>
      anchors
        .map((a) => a.getAttribute("href"))
        .filter((href): href is string => !!href)
    );

    const internal = new Set(
      hrefs
        .filter((href) => href.startsWith("/") && !href.startsWith("//"))
        .map((href) => href.split("#")[0])
        .filter((href) => href !== "" && !href.endsWith(".pdf"))
    );

    expect(internal.size).toBeGreaterThan(0);

    for (const path of internal) {
      const response = await request.get(path);
      expect(response.status(), `expected ${path} to return 200`).toBe(200);
    }
  });
});
