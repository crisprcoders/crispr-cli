import inquirer from "inquirer";
import { DummyFeatures } from "../data/data";

export interface SelectedFeatureResponse {
  featureId: string;
}

export async function initFeaturesListQuestion(): Promise<SelectedFeatureResponse> {
  const choices = DummyFeatures.map((feature) => ({
    name: feature.title,
    value: feature.id,
  }));

  return await inquirer.prompt([
    {
      type: "list",
      name: "featureId",
      message: "Select a feature to view details:",
      choices: choices,
    },
  ]);
}
