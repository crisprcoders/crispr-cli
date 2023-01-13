import fs from "fs";
import inquirer from "inquirer";
import { red, green, cyan } from "kleur";
import { Answer } from "../models/choice";
import { ConsoleMessage } from "../models/console-message";
import { spinnerError } from "./spinner";

const getFilePath = (path: string) => {
  let fileFullPath: string = process.cwd() + `/${path}`;
  if (path.slice(1) === "/") {
    fileFullPath = process.cwd() + `${path}`;
  }
  return fileFullPath;
};

export const checkExistence = (path: string): boolean => {
  return fs.existsSync(getFilePath(path));
};

export const checkIfDirExistElseMakeDir = (path: string): void => {
  if (path) {
    const dir = checkExistence(path);
    if (!dir) {
      fs.mkdirSync(getFilePath(path), { recursive: true });
    }
  }
};

export const fileAlreadyExist = (fileName: string): void => {
  spinnerError(`${fileName} already exists!`);
  process.exit(1);
};

export async function overwriteFileQuestion(): Promise<Answer> {
  return inquirer.prompt([
    {
      name: "overwrite",
      type: "confirm",
      message: "This file already exists. Do you want to overwrite it?",
      default: false,
    },
  ]);
}

export async function overwriteFileOrThrowError(
  filePath: string,
  fileNameWithExt: string,
  fileContent: string
): Promise<void> {
  const overwriteAnswer: Answer = await overwriteFileQuestion();
  if (overwriteAnswer?.overwrite === true)
    return createFile(filePath, fileNameWithExt, fileContent, true);
  return fileAlreadyExist(fileNameWithExt);
}

export function createFile(
  filePath: string,
  fileName: string,
  fileContent: string,
  fileAlreadyExists = false
): void {
  const fileFullPath = getFilePath(`${filePath}/${fileName}`);
  console.log("her", fileFullPath);
  // @ts-ignore
  fs.writeFile(fileFullPath, fileContent, {}, (error: Error) => {
    console.log("her: 2", error);
    if (!error && !fileAlreadyExists) return showCreate(fileName, fileFullPath);
    if (!error && fileAlreadyExists) return showUpdate(fileName, fileFullPath);
    return showError(error);
  });
}

export const showError = (message: string | Error): void => {
  console.error(red(ConsoleMessage.ERROR) + message);
};

export const showGenerate = (fileName: string): void => {
  console.log(cyan(ConsoleMessage.GENERATE) + `${fileName}...`);
};

export const showCreate = (fileName: string, filePath: string): void => {
  filePath
    ? console.log(green(ConsoleMessage.CREATE) + `${fileName} in ${filePath}`)
    : console.log(green(ConsoleMessage.CREATE) + `${fileName}`);
};

export const showUpdate = (fileName: string, filePath: string): void => {
  filePath
    ? console.log(green(ConsoleMessage.UPDATE) + `${fileName} in ${filePath}`)
    : console.log(green(ConsoleMessage.UPDATE) + `${fileName}`);
};
