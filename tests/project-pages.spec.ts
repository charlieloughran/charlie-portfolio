import { test, expect } from "@playwright/test";

const slugs = ["harvest", "reconmatic", "script-mate"];

test.describe("Case study pages", () => {
  for (const slug of slugs) {
    test(`/projects/${slug} renders the project detail layout`, async ({ page }) => {
      const response = await page.goto(`/projects/${slug}`);
      expect(response?.status()).toBe(200);

      await expect(page.locator(".pd")).toBeVisible();
      await expect(page.locator(".pd__title")).toBeVisible();
      await expect(page.locator(".pd__sidebar-card")).toBeVisible();

      // Back-to-work links should point at the homepage portfolio anchor.
      const backLinks = page.locator(".pd__back");
      await expect(backLinks.first()).toHaveAttribute("href", "/#work");
    });
  }
});

test.describe("CV download", () => {
  test("contact section includes a CV download link", async ({ page }) => {
    await page.goto("/#contact");

    const cvLink = page.locator(".contact__cv-button");
    await expect(cvLink).toBeVisible();
    await expect(cvLink).toHaveAttribute("href", "/Charlie_Loughran_UX_CV.pdf");
    await expect(cvLink).toHaveAttribute("download", "");
  });

  test("hero section includes a CV download link", async ({ page }) => {
    await page.goto("/");

    const cvLink = page.locator('a[href="/Charlie_Loughran_UX_CV.pdf"]').first();
    await expect(cvLink).toHaveAttribute("download", "");
  });
});
