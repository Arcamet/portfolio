import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const projectSlugs = [
  "yapos",
  "auralis",
  "personal-finance-tracker",
  "intern-hunt-crm",
  "local-matchroom",
];

test("homepage presents identity and project order", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Full-stack products",
  );
  const names = await page.locator(".project-card h3").allTextContents();
  expect(names).toEqual([
    "YapOS",
    "Auralis",
    "Personal Finance Tracker",
    "Intern Hunt CRM",
    "Local Matchroom",
  ]);
  await expect(page.locator('a[href="#"]')).toHaveCount(0);
  await expect(page.locator('img[src^="/_vinext/image"]')).toHaveCount(0);
});

test("every project route and the resume route resolve", async ({ page }) => {
  for (const slug of projectSlugs) {
    await page.goto(`/projects/${slug}`);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Current boundaries" }),
    ).toBeVisible();
  }
  await page.goto("/resume");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("mobile menu closes with Escape and restores focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Menu" });
  await trigger.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("button", { name: "Close" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(trigger).toBeFocused();
});

test("verified external links disclose new tabs", async ({ page }) => {
  await page.goto("/projects/personal-finance-tracker");
  for (const link of await page.locator('a[target="_blank"]').all()) {
    await expect(link).toHaveAttribute("rel", "noreferrer");
    await expect(link).toContainText("opens in a new tab");
    await expect(link).toHaveAttribute("href", /^https:\/\//);
  }
});

test("project galleries use real assets without failed requests", async ({
  page,
}) => {
  for (const slug of projectSlugs) {
    await page.goto(`/projects/${slug}`);
    const images = page.locator("img");
    for (let index = 0; index < (await images.count()); index += 1) {
      const image = images.nth(index);
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (element) =>
              (element as HTMLImageElement).complete &&
              (element as HTMLImageElement).naturalWidth > 0,
          ),
        )
        .toBe(true);
    }
    await expect(page.locator('img[src^="/_vinext/image"]')).toHaveCount(0);
  }

  await page.goto("/projects/yapos");
  await expect(page.locator(".project-gallery li")).toHaveCount(5);
  await page.goto("/projects/intern-hunt-crm");
  await expect(page.locator("#gallery")).toHaveCount(0);
  await expect(
    page.getByText("Interface study", { exact: true }),
  ).toBeVisible();
});

test("favicon and manifest assets resolve", async ({ page, request }) => {
  await page.goto("/");
  await expect(page.locator('link[rel~="icon"]')).toHaveCount(4);
  for (const path of [
    "/favicon.ico",
    "/icon-192.png",
    "/icon-512.png",
    "/apple-touch-icon.png",
    "/manifest.webmanifest",
  ]) {
    expect((await request.get(path)).ok(), path).toBe(true);
  }
});

test("320px layout has no horizontal overflow and reduced motion keeps content visible", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 320, height: 800 });
  await page.goto("/");
  const overflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth >
      document.documentElement.clientWidth,
  );
  expect(overflow).toBe(false);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

for (const path of [
  "/",
  "/projects/yapos",
  "/projects/personal-finance-tracker",
  "/about",
  "/resume",
]) {
  test(`axe scan passes on ${path}`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}
