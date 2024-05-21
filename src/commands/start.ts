import { Command } from "commander";

export const start = new Command("start");

//adding feature cli
start.command("feature <featureCode>").action(async (featureCode: string) => {
  console.log(process.cwd());
  console.log("Feature adding cli");
});
