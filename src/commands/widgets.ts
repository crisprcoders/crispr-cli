import { Command } from "commander";
import { spinnerSuccess, updateSpinnerText } from "./../utils/spinner";

export const widgets = new Command("widgets");

widgets.command("list").action(async () => {
  const dir = process.cwd();
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

widgets
  .command("get")
  .option("<id>", "the id of the widget")
  .option("-f, --format <format>", "the format of the widget") // an optional flag, this will be in options.f
  .action(async (id: number, options: any) => {
    updateSpinnerText("Getting widget " + id);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    spinnerSuccess();
    console.table({ id: 1, name: "Tommy" });
  });
