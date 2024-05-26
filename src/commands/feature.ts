import { Command } from "commander";
import { DummyFeatures } from "../data/data";
import {
  SelectedFeatureResponse,
  initFeaturesListQuestion,
} from "../features/init";

export const feature = new Command("feature");

feature.command("list").action(async () => {
  console.log("Command line for listing all the features");

  // Displaying selected properties: sn, title, status, and deadline
  const featuresTable = DummyFeatures.map((feature, index) => ({
    sn: index + 1,
    title: feature.title,
    status: feature.status,
    deadline: feature.deadline.toISOString().split("T")[0],
  }));

  console.table(featuresTable);
});

feature.command("details").action(async () => {
  const answer: SelectedFeatureResponse = await initFeaturesListQuestion();

  const selectedFeature = DummyFeatures.find(
    (feature) => feature.id === answer.featureId
  );

  if (selectedFeature) {
    console.log("Details for selected feature:");
    console.table({
      id: selectedFeature.id,
      title: selectedFeature.title,
      description: selectedFeature.description,
      deadline: selectedFeature.deadline.toISOString().split("T")[0],
      priority: selectedFeature.priority,
      status: selectedFeature.status,
      projectId: selectedFeature.projectId,
      createdAt: selectedFeature.createdAt.toISOString().split("T")[0],
      updatedAt: selectedFeature.updatedAt.toISOString().split("T")[0],
    });
  } else {
    console.error("Feature not found");
  }
});
