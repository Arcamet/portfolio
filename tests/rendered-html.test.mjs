import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the finished homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Jose Carlos Arce Camet/);
  assert.match(html, /Full-stack products, AI systems/);
  assert.match(html, /YapOS/);
  assert.match(html, /Skip to main content/);
  assert.doesNotMatch(
    html,
    /codex-preview|react-loading-skeleton|Your site is taking shape/i,
  );
});

test("server-renders a case study and secondary routes", async () => {
  for (const path of [
    "/projects/yapos",
    "/projects/auralis",
    "/projects/personal-finance-tracker",
    "/projects/intern-hunt-crm",
    "/projects/local-matchroom",
    "/about",
    "/resume",
    "/404",
  ]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.doesNotMatch(html, /href=["']#["']/i);
    assert.doesNotMatch(
      html,
      /image pending|not configured|placeholder|download files are/i,
    );
    assert.doesNotMatch(html, /alumniOf/);
  }
});

test("renders verified galleries and keeps internal notes private", async () => {
  const yapos = await (await render("/projects/yapos")).text();
  assert.match(yapos, /Product gallery/);
  assert.match(yapos, /dashboard-desktop\.png/);
  assert.match(yapos, /chat-mobile\.png/);
  assert.doesNotMatch(yapos, /Résumé bullets|Interview topics/);

  const internHunt = await (await render("/projects/intern-hunt-crm")).text();
  assert.match(internHunt, /Interface study/);
  assert.doesNotMatch(internHunt, /id="gallery"/);

  const resume = await (await render("/resume")).text();
  assert.doesNotMatch(resume, /Résumé bullets|Interview topics/);
});
