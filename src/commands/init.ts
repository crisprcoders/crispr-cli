import { Command } from "commander";
import { Answer } from "../models/choice";
import { initQuestion } from "../questions/init";
import {
  checkExistence,
  checkIfDirExistElseMakeDir,
  createFile,
  overwriteFileOrThrowError,
} from "../utils/fileOperation";
import { spinnerSuccess, updateSpinnerText } from "./../utils/spinner";

const filePath: string = "crispr";
const fileNameWithExt: string = "crispr.json";

export const init = new Command("init").action(async () => {
  console.log("Initializing the crispr workplace");
  const initAnswer: Answer = await initQuestion();
  console.log("initAnswer", initAnswer);
  checkIfDirExistElseMakeDir(filePath);
  const fileExists = checkExistence(`${filePath}/${fileNameWithExt}`);
  if (!fileExists) {
    return createFile(filePath, fileNameWithExt, JSON.stringify(initAnswer));
  }
  return overwriteFileOrThrowError(
    filePath,
    fileNameWithExt,
    JSON.stringify(initAnswer)
  );
});

init.command("env").action(async () => {
  const dir = process.cwd();
  const platform = process.platform;
  console.log(platform);
  console.log(dir);
  console.log(__dirname);
  updateSpinnerText("Processing ");
  // do work
  await new Promise((resolve) => setTimeout(resolve, 1000)); // emulate work
  spinnerSuccess();
});
