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
    "Personal Finance Tracker",
    "YapOS",
    "Auralis",
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
  for (const path of [
    "/",
    "/about",
    "/resume",
    "/projects/personal-finance-tracker",
    "/projects/intern-hunt-crm",
    "/projects/local-matchroom",
  ]) {
    await page.goto(path);
    const externalLinks = page.locator('a[href^="https://"]');
    for (const link of await externalLinks.all()) {
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("rel", "noreferrer");
      await expect(link).toContainText("opens in a new tab");
    }
  }
});

test("project galleries use real assets without failed requests", async ({
  page,
}) => {
  for (const slug of projectSlugs) {
    await page.goto(`/projects/${slug}`);
    await expect(page.locator(".case-visual img")).not.toHaveAttribute(
      "loading",
      "lazy",
    );
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
  const homepage = await request.get("/");
  expect(homepage.headers()["x-content-type-options"]).toBe("nosniff");
  expect(homepage.headers()["x-frame-options"]).toBe("DENY");
  expect(homepage.headers()["content-security-policy"]).toContain(
    "frame-ancestors 'none'",
  );
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

test("phone, tablet, and desktop layouts stay within the viewport", async ({
  page,
}) => {
  for (const width of [390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of ["/", "/projects/personal-finance-tracker", "/resume"]) {
      await page.goto(path);
      expect(
        await page.evaluate(
          () =>
            document.documentElement.scrollWidth <=
            document.documentElement.clientWidth,
        ),
        `${path} at ${width}px`,
      ).toBe(true);
    }
  }
});

test("keyboard focus is visible and critical navigation has no console errors", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto("/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to main content" });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();

  await page
    .getByRole("link", { name: "Personal Finance Tracker", exact: true })
    .click();
  await expect(page).toHaveURL(/\/projects\/personal-finance-tracker$/);
  await page.getByRole("link", { name: "Back to selected work" }).click();
  await expect(page).toHaveURL(/\/#work$/);
  expect(errors).toEqual([]);
});

test("unknown routes return the custom 404 experience", async ({ page }) => {
  const response = await page.goto("/this-route-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", {
      name: "This page is outside the current archive.",
    }),
  ).toBeVisible();
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
