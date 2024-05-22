import path from "path";
import {
  logActivity,
  checkIfDirExistElseMakeDir,
  createFile,
} from "./fileOperation";

export const createFeatureFiles = async (
  featureCode: string
): Promise<void> => {
  const featureDir = path.join("src/modules", featureCode);
  const crisprDir = path.join(featureDir, ".crispr");

  const filesToCreate = [
    "component.tsx",
    "client-component.tsx",
    "lib.ts",
    "communication.tsx",
    ".crispr/crispr.json",
    "index.tsx",
  ];

  try {
    // Create the main feature directory
    await checkIfDirExistElseMakeDir(featureDir);
    await logActivity(`Created directory: ${featureDir}`);

    // Create the .crispr directory within the feature directory
    await checkIfDirExistElseMakeDir(crisprDir);
    await logActivity(`Created directory: ${crisprDir}`);

    // Create the necessary files within the feature directory
    for (const file of filesToCreate) {
      const filePath = path.join(featureDir, file);
      const actualFilePath = file.startsWith(".crispr/")
        ? path.join(featureDir, file)
        : filePath;
      await createFile(path.dirname(actualFilePath), path.basename(file), "");
      await logActivity(`Created file: ${actualFilePath}`);
    }

    // Create the feature documentation directory
    const featureDocDir = path.join(".docs/features");
    await checkIfDirExistElseMakeDir(featureDocDir);
    await logActivity(`Created directory: ${featureDocDir}`);

    // Create the feature documentation file
    const featureDocFile = `${featureCode}.md`;
    await createFile(
      featureDocDir,
      featureDocFile,
      `# Feature ${featureCode}\n`
    );
    await logActivity(
      `Created file: ${path.join(featureDocDir, featureDocFile)}`
    );
  } catch (error: any) {
    await logActivity(`Error creating feature files: ${error.message}`);
    throw error;
  }
};
