#!/usr/bin/env node
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import { Command } from "commander";
import { widgets } from "./commands/widgets";
import { init } from "./commands/init";
import { config } from "./commands/config";
//import feature
import { feature } from "./commands/feature";
import { spinnerError, stopSpinner } from "./utils/spinner";

// clear({ fullClear: true });
console.log(
  chalk.blue(figlet.textSync("crispr-cli", { horizontalLayout: "full" }))
);

const program = new Command();
program.description("Cli tool for efficient person");
program.version("0.0.1");

program.addCommand(widgets);
program.addCommand(init);
program.addCommand(config);
//adding feature command
program.addCommand(feature);

process.on("unhandledRejection", function (err: Error) {
  // listen for unhandled promise rejections
  const debug = program.opts().verbose; // is the --verbose flag set?
  if (debug) {
    console.error(err.stack); // print the stack trace if we're in verbose mode
  }
  spinnerError(); // show an error spinner
  stopSpinner(); // stop the spinner
  program.error("", { exitCode: 1 }); // exit with error code 1
});

async function main() {
  await program.parseAsync();
}
console.log(); // log a new line so there is a nice space
main();

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
