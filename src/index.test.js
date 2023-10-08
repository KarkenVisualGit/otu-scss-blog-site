import puppeteer from "puppeteer";
import { toMatchImageSnapshot } from "jest-image-snapshot";

expect.extend({ toMatchImageSnapshot });

describe("styles.test", () => {
  const originalTimeout = 10000;

  const pagesToTest = [
    "http://localhost:9000/index.html",
    "http://localhost:9000/feedback.html",
    "http://localhost:9000/posts.html",
    "http://localhost:9000/post.html",
  ];

  const viewports = [
    { width: 1920, height: 1080 },
    { width: 600, height: 1080 },
  ];

  pagesToTest.forEach((pageUrl) => {
    viewports.forEach(({ width, height }) => {
      it(
        `should have proper view for page 
      ${pageUrl} with ${width}x${height} params`,
        async () => {
          const browser = await puppeteer.launch({
            headless: "new",
          });
          const page = await browser.newPage();
          await page.setViewport({ width, height });
          await page.goto(pageUrl, { waitUntil: "networkidle0" });

          const image = await page.screenshot();
          await browser.close();

          expect(image).toMatchImageSnapshot(
            process.env.CI
              ? {
                  failureThreshold: 0.01,
                  failureThresholdType: "percent",
                }
              : undefined
          );
        },
        originalTimeout
      );
    });
  });
});
