import { Command } from "commander";
import { spinnerSuccess, updateSpinnerText } from "../utils/spinner";

export const config = new Command("config").action(async () => {
  updateSpinnerText("Processing ");
  // do work
  await new Promise((resolve) => setTimeout(resolve, 1000)); // emulate work
  spinnerSuccess();
});

config.command("env").action(async () => {
  const dir = process.cwd();
  const platform = process.platform;
  console.log(platform);
  console.log(dir);
  console.log(__dirname);
  updateSpinnerText("Processing ");
  // do work
  await new Promise((resolve) => setTimeout(resolve, 1000)); // emulate work
  spinnerSuccess();
  console.table([
    { id: 1, name: "Tommy" },
    { id: 2, name: "Bob" },
  ]);
});
