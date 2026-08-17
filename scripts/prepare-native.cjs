const fs = require("node:fs");
const path = require("node:path");

const platform = process.platform;
const arch = process.arch;
const suffix = platform === "win32" ? "msvc" : "gnu";
const binaryName = `lightningcss.${platform}-${arch}-${suffix}.node`;
const packageName = `lightningcss-${platform}-${arch}-${suffix}`;
const source = path.join(__dirname, "..", "node_modules", packageName, binaryName);
const target = path.join(__dirname, "..", "node_modules", "lightningcss", binaryName);

if (fs.existsSync(source) && !fs.existsSync(target)) {
  fs.copyFileSync(source, target);
  console.log(`Prepared ${binaryName}`);
}
