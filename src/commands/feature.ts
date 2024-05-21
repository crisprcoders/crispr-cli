import { Command } from "commander";

export const feature = new Command("feature");

feature.command("list").action(async () => {
  const dir = process.cwd();
  console.log(dir);
  console.log("Comman line for listing all the features");
});
