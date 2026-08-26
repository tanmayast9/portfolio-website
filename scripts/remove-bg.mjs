import { removeBackground } from "@imgly/background-removal-node";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");

const jobs = [
  ["hero-portrait.png", "hero-portrait-cutout.png"],
  ["about-portrait.png", "about-portrait-cutout.png"],
];

for (const [inputName, outputName] of jobs) {
  const inputPath = path.join(imagesDir, inputName);
  const outputPath = path.join(imagesDir, outputName);

  console.log(`Processing ${inputName}...`);
  const result = await removeBackground(pathToFileURL(inputPath).href, {
    output: { format: "image/png", quality: 1 },
  });

  const buffer = Buffer.from(await result.arrayBuffer());
  await writeFile(outputPath, buffer);
  console.log(`Saved ${outputName} (${buffer.length} bytes)`);
}

console.log("Done.");
