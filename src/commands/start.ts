import { Command } from "commander";
import { logActivity } from "../utils/fileOperation";
import { createFeatureFiles } from "../utils/createFeatureFiles";

export const start = new Command("start");
start.command("feature <featureCode>").action(async (featureCode: string) => {
  try {
    console.log(`Starting feature creation for: ${featureCode}`);
    await logActivity(`Starting feature creation for: ${featureCode}`);

    await createFeatureFiles(featureCode);

    console.log("Feature creation completed.");
    await logActivity("Feature creation completed.");
  } catch (error: any) {
    console.error(`Failed to create feature: ${error.message}`);
    await logActivity(`Failed to create feature: ${error.message}`);
    process.exit(1);
  }
});
