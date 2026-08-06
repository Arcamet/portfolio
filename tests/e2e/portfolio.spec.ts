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
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(trigger).toBeFocused();
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

for (const path of ["/", "/projects/yapos", "/about", "/resume"]) {
  test(`axe scan passes on ${path}`, async ({ page }) => {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}
