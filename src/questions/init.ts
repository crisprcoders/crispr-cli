import inquirer from "inquirer";
import { Answer, Choice, InitOperationChoiceValue } from "../models/choice";

export async function initQuestion(): Promise<Answer> {
  const listOfFiles: Choice[] = [
    { name: "Workplace", value: InitOperationChoiceValue.WORKPLACE },
    { name: "Course", value: InitOperationChoiceValue.COURSE },
    { name: "Work", value: InitOperationChoiceValue.WORK },
    { name: "School", value: InitOperationChoiceValue.SCHOOL },
  ];

  return await inquirer.prompt([
    {
      name: "init",
      type: "list",
      message: "What are you trying to initialize:",
      choices: listOfFiles,
    },
  ]);
}
